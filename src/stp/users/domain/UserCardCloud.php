<?php declare(strict_types=1);


namespace Viabo\stp\users\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\stp\users\domain\events\UserCardCloudCreatedDomainEvent;

final class UserCardCloud extends AggregateRoot
{
    public function __construct(
        private UserCardCloudId            $id,
        private UserCardCloudBusinessId    $businessId,
        private CardCloudId                $cardId,
        private UserCardCloudOwnerId       $ownerId,
        private UserCardCloudName          $name,
        private UserCardCloudEmail         $email,
        private UserCardCloudCreatedByUser $createdByUser,
        private UserCardCloudCreateDate    $createDate
    )
    {
    }

    public static function create(
        string $businessId,
        string $cardId,
        string $ownerId,
        string $ownerName,
        string $ownerEmail,
        string $userId
    ): static
    {
        $user = new static(
            UserCardCloudId::random(),
            UserCardCloudBusinessId::create($businessId),
            CardCloudId::create($cardId),
            UserCardCloudOwnerId::create($ownerId),
            UserCardCloudName::create($ownerName),
            UserCardCloudEmail::create($ownerEmail),
            UserCardCloudCreatedByUser::create($userId),
            UserCardCloudCreateDate::todayDate()
        );
        $user->record(new UserCardCloudCreatedDomainEvent($user->id(), $user->toArray()));
        return $user;
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function cardId(): string
    {
        return $this->cardId->value();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'businessId' => $this->businessId->value(),
            'cardId' => $this->cardId->value(),
            'ownerId' => $this->ownerId->value(),
            'name' => $this->name->value(),
            'email' => $this->email->value(),
            'createdByUser' => $this->createdByUser->value(),
            'createDate' => $this->createDate->value(),
        ];
    }
}