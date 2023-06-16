<?php declare(strict_types=1);


namespace Viabo\management\credential\application\create;


use Viabo\management\card\application\find\CardQuery;
use Viabo\management\credential\domain\CardCredential;
use Viabo\management\credential\domain\CardCredentialRepository;
use Viabo\management\credential\domain\CardData;
use Viabo\management\credential\domain\CommerceCredentials;
use Viabo\management\credential\domain\services\CardCredentialFinder;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CredentialCreator
{
    public function __construct(
        private CardCredentialRepository $repository ,
        private CardCredentialFinder     $finder ,
        private PaymentProcessorAdapter  $adapter ,
        private QueryBus                 $queryBus ,
        private EventBus                 $bus
    )
    {
    }

    public function __invoke(CardId $cardId , CommerceCredentials $commerceCredentials): void
    {
        $credential = $this->credentialFinder($cardId);

        if (empty($credential)) {
            $credential = $this->save($cardId , $commerceCredentials);
        } else {
            $this->update($credential , $commerceCredentials);
        }

        $this->bus->publish(...$credential->pullDomainEvents());
    }

    private function credentialFinder(CardId $cardId): CardCredential|null
    {
        try {
            return $this->finder->__invoke($cardId);
        } catch (\DomainException) {
            return null;
        }
    }

    private function save(CardId $cardId , CommerceCredentials $commerceCredentials): CardCredential
    {
        $cardData = $this->cardData($cardId);
        $credential = CardCredential::create(
            $cardId ,
            $commerceCredentials ,
            $cardData
        );

        $this->adapter->register($credential);
        $this->repository->save($credential);
        return $credential;
    }

    private function cardData(CardId $cardId): CardData
    {
        $card = $this->queryBus->ask(new CardQuery($cardId->value()));
        return CardData::create($card->cardData['number'] , $card->cardData['expirationDate']);
    }

    private function update(CardCredential $credential , CommerceCredentials $commerceCredentials): void
    {
        $credential->updateClientKey($commerceCredentials->clientKey());
        $this->repository->update($credential);
    }

}