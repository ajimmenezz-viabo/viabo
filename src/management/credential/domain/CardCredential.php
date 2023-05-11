<?php declare(strict_types=1);


namespace Viabo\management\credential\domain;


use Viabo\management\credential\domain\events\CardCredentialCreatedDomainEvent;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CardCredential extends AggregateRoot
{
    public function __construct(
        private CardCredentialId           $id ,
        private CardId                     $cardId ,
        private CardCredentialUserId       $userId ,
        private CardCredentialUserName     $userName ,
        private CardCredentialPassword     $password ,
        private CardCredentialEmail        $email ,
        private CardCredentialClientKey    $clientKey ,
        private CardCredentialRegisterDate $registerDate ,
        private CommerceCredentials        $commerceCredentials ,
        private CardData                   $cardData ,
    )
    {
    }

    public static function create(
        CardId $cardId , CommerceCredentials $commerceCredentials , CardData $cardData
    ): static
    {
        $credential = new static(
            CardCredentialId::random() ,
            $cardId ,
            new CardCredentialUserId('') ,
            CardCredentialUserName::random() ,
            CardCredentialPassword::random() ,
            CardCredentialEmail::random() ,
            CardCredentialClientKey::create($commerceCredentials->clientKey()) ,
            CardCredentialRegisterDate::todayDate() ,
            $commerceCredentials ,
            $cardData
        );

        $credential->record(new CardCredentialCreatedDomainEvent($credential->id->value() , $credential->toArray()));

        return $credential;
    }

    public function cardId(): CardId
    {
        return $this->cardId;
    }

    public function userName(): CardCredentialUserName
    {
        return $this->userName;
    }

    public function password(): CardCredentialPassword
    {
        return $this->password;
    }

    public function email(): CardCredentialEmail
    {
        return $this->email;
    }

    public function clientKey(): string
    {
        return $this->clientKey->valueDecrypt();
    }

    public function companyKey(): string
    {
        return $this->commerceCredentials->companyKey();
    }

    public function setUserId(string $value): void
    {
        $this->userId = $this->userId->update($value);
    }

    public function userId(): CardCredentialUserId
    {
        return $this->userId;
    }

    public function cardNumber(): string
    {
        return $this->cardData->number();
    }

    public function cardExpirationDate(): string
    {
        return $this->cardData->expirationDate();
    }

    public function date(): string
    {
        return $this->registerDate->value();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'cardId' => $this->cardId->value() ,
            'userId' => $this->userId->value() ,
            'userName' => $this->userName->value() ,
            'password' => $this->password->value() ,
            'email' => $this->email->value() ,
            'clientKey' => $this->clientKey->value() ,
            'registerDate' => $this->registerDate->value()
        ];
    }

    public function toArrayDecrypt(): array
    {
        return [
            'userId' => $this->userId->valueDecrypt() ,
            'userName' => $this->userName->valueDecrypt() ,
            'password' => $this->password->valueDecrypt() ,
            'email' => $this->email->valueDecrypt()
        ];
    }

}