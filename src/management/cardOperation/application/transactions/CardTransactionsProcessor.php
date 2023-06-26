<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\application\transactions;


use Viabo\management\card\application\find\CardInformationQuery;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\cardOperation\domain\CardOperation;
use Viabo\management\cardOperation\domain\CardOperationBalance;
use Viabo\management\cardOperation\domain\CardOperationConcept;
use Viabo\management\cardOperation\domain\CardOperationDestination;
use Viabo\management\cardOperation\domain\CardOperationPayEmail;
use Viabo\management\cardOperation\domain\CardOperationOrigin;
use Viabo\management\cardOperation\domain\CardOperationOriginMain;
use Viabo\management\cardOperation\domain\CardOperationRepository;
use Viabo\management\cardOperation\domain\CardOperationReverseEmail;
use Viabo\management\cardOperation\domain\CardOperations;
use Viabo\management\cardOperation\domain\exceptions\CardOperationCardBlocked;
use Viabo\management\cardOperation\domain\exceptions\CardOperationCommerceDifferent;
use Viabo\management\cardOperation\domain\exceptions\OriginCardInsufficientBalance;
use Viabo\management\credential\application\find\CardCredentialQuery;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\credential\CardCredentialClientKey;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\shared\domain\utils\NumberFormat;

final readonly class CardTransactionsProcessor
{
    public function __construct(
        private CardOperationRepository $repository ,
        private PaymentProcessorAdapter $adapter ,
        private QueryBus                $queryBus ,
        private EventBus                $bus
    )
    {
    }

    public function __invoke(
        CardId                  $originCardId ,
        CardCredentialClientKey $clientKey ,
        CardOperationPayEmail   $payEmail ,
        array                   $destinationCards
    ): void
    {
        if (empty($destinationCards)) return;

        $originCardData = $this->cardData($originCardId);
        $destinationCardsData = $this->destinationCardsData($destinationCards);

        $this->ensureHasSameCommerce($originCardData , $destinationCardsData);
        $this->ensureCardsNotBlocked($destinationCardsData);
        $this->ensureOriginCardHasSufficientBalance($originCardData , $destinationCardsData);

        $operations = $this->operations(
            $destinationCardsData , $originCardData['number'] , $originCardData['main'] , $payEmail , $clientKey
        );

        $this->adapter->transactionPay($operations);

        $this->repository->save($operations);

        $this->publish($operations);
    }

    private function cardData(CardId $cardId): array
    {
        $card = $this->queryBus->ask(new CardQuery($cardId->value()));
        $credential = $this->queryBus->ask(new CardCredentialQuery($cardId->value()));
        $cardInformation = $this->queryBus->ask(new CardInformationQuery($cardId->value() , $credential->credentialData));
        return array_merge($card->cardData , $cardInformation->cardData);
    }

    private function ownerEmail($ownerId): string
    {
        $user = $this->queryBus->ask(new FindUserQuery($ownerId , ''));
        return $user->userData['email'];
    }

    private function destinationCardsData(array $destinationCards): array
    {
        $destinationCardsData = [];
        foreach ($destinationCards as $destinationCard) {
            $cardData = $this->cardData(new CardId($destinationCard['cardId']));
            $ownerEmail = $this->ownerEmail($cardData['ownerId']);
            unset($destinationCard['cardId']);
            $cardData['ownerEmail'] = $ownerEmail;
            $destinationCardsData[] = array_merge($cardData , $destinationCard);
        }
        return $destinationCardsData;
    }

    private function ensureHasSameCommerce(array $originCardData , array $destinationCardsData): void
    {
        foreach ($destinationCardsData as $destinationCardData) {
            if (!in_array($originCardData['commerceId'] , $destinationCardData)) {
                throw new CardOperationCommerceDifferent(substr($destinationCardData['number'] , -8));
            }
        }
    }

    private function ensureCardsNotBlocked(array $destinationCardsData): void
    {
        foreach ($destinationCardsData as $destinationCardData) {
            if ($destinationCardData['block'] === 'Blocked') {
                throw new CardOperationCardBlocked(substr($destinationCardData['number'] , -8));
            }
        }
    }

    private function ensureOriginCardHasSufficientBalance(array $originCardData , array $destinationCardsData): void
    {
        $originBalance = NumberFormat::float($originCardData['balance']);
        foreach ($destinationCardsData as $destinationCardData) {
            $originBalance -= NumberFormat::float($destinationCardData['amount']);
            if ($originBalance < 0) {
                throw new OriginCardInsufficientBalance();
            }
        }
    }

    private function operations(
        array                   $destinationCardsData ,
        string                  $originCardNumber ,
        string                  $originCardMain ,
        CardOperationPayEmail   $payEmail ,
        CardCredentialClientKey $clientKey
    ): CardOperations
    {
        $operations = [];
        foreach ($destinationCardsData as $destinationCardData) {
            $operations[] = CardOperation::create(
                new CardOperationOrigin($originCardNumber) ,
                new CardOperationOriginMain($originCardMain) ,
                new CardOperationDestination($destinationCardData['number']) ,
                new CardOperationBalance($destinationCardData['amount']) ,
                new CardOperationConcept($destinationCardData['concept']) ,
                $payEmail ,
                new CardOperationReverseEmail($destinationCardData['ownerEmail']) ,
                $clientKey
            );
        }

        return new CardOperations($operations);
    }

    private function publish(CardOperations $operations): void
    {
        array_map(function (CardOperation $operation) {
            $operation->setEventCreated();
            $this->bus->publish(...$operation->pullDomainEvents());
        } , $operations->getIterator()->getArrayCopy());
    }

}