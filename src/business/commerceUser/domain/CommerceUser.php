<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\domain;


use Viabo\business\commerceUser\domain\events\CommerceUserCreatedDomainEvent;
use Viabo\business\commerceUser\domain\events\CommerceUserDeleted;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommerceUser extends AggregateRoot
{
    public function __construct(
        private CommerceUserId           $id ,
        private CommerceId               $commerceId ,
        private CommerceUserKey          $userId ,
        private CommerceUserRegisterDate $registerDate
    )
    {
    }

    public static function create(CommerceId $commerceId , CommerceUserKey $userId): static
    {
        $commerceUser = new static(
            CommerceUserId::random() , $commerceId , $userId , CommerceUserRegisterDate::todayDate()
        );

        $commerceUser->record(new CommerceUserCreatedDomainEvent(
            $commerceUser->id()->value() , $commerceUser->toArray()
        ));
        return $commerceUser;
    }

    public function id(): CommerceUserId
    {
        return $this->id;
    }

    public function isDifferent(CommerceId $commerceId): bool
    {
        return $this->commerceId->isDifferent($commerceId->value());
    }

    public function setEvenDelete(): void
    {
        $this->record(new CommerceUserDeleted($this->id->value(), $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'commerceId' => $this->commerceId->value() ,
            'userId' => $this->userId->value() ,
            'registerDate' => $this->registerDate->value()
        ];
    }
}