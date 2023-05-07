<?php declare(strict_types=1);


namespace Viabo\management\credential\application\create;


use Viabo\management\card\application\find\CardQuery;
use Viabo\management\credential\domain\CardCredential;
use Viabo\management\credential\domain\CardCredentialRepository;
use Viabo\management\credential\domain\CardData;
use Viabo\management\credential\domain\CardPaymentProcessorAdapter;
use Viabo\management\credential\domain\CommerceCredentials;
use Viabo\management\credential\domain\services\CardCredentialValidator;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CredentialCreator
{
    public function __construct(
        private CardCredentialRepository    $repository ,
        private CardCredentialValidator     $validator ,
        private CardPaymentProcessorAdapter $adapter ,
        private QueryBus                    $queryBus ,
        private EventBus                    $bus
    )
    {
    }

    public function __invoke(CardId $cardId , CommerceCredentials $commerceCredentials): void
    {
        $cardData = $this->cardData($cardId);
        $credential = CardCredential::create($cardId , $commerceCredentials , $cardData);

        $this->validator->ensureExist($credential);
        $this->adapter->register($credential);
        $this->repository->save($credential);

        $this->bus->publish(...$credential->pullDomainEvents());
    }

    private function cardData(CardId $cardId): CardData
    {
        $card = $this->queryBus->ask(new CardQuery($cardId->value()));
        return CardData::create($card->cardData['number'] , $card->cardData['expirationDate']);
    }

}