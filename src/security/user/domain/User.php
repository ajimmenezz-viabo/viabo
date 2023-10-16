<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\events\CardOwnerDataUpdatedDomainEvent;
use Viabo\security\user\domain\events\CommerceDemoUserCreatedDomainEvent;
use Viabo\security\user\domain\events\LegalRepresentativeCreatedDomainEvent;
use Viabo\security\user\domain\events\SendUserPasswordDomainEvent;
use Viabo\security\user\domain\events\SessionStartedDomainEvent;
use Viabo\security\user\domain\events\UserCreatedDomainEvent;
use Viabo\security\user\domain\events\UserDeletedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class User extends AggregateRoot
{
    public function __construct(
        private UserId       $id ,
        private UserProfile  $profile ,
        private UserName     $name ,
        private UserLastname $lastname ,
        private UserPhone    $phone ,
        private UserEmail    $email ,
        private UserPassword $password ,
        private UserRegister $register ,
        private UserActive   $active
    )
    {
    }

    public static function createLegalRepresentative(
        UserName     $name ,
        UserLastname $lastname ,
        UserPhone    $phone ,
        UserEmail    $email ,
        UserPassword $password
    ): self
    {
        $user = new self(
            UserId::random() ,
            new UserProfile('3') ,
            $name ,
            $lastname ,
            $phone ,
            $email ,
            $password ,
            UserRegister::todayDate() ,
            new UserActive('1') ,
        );

        $user->record(new LegalRepresentativeCreatedDomainEvent($user->id()->value() , $user->toArray()));

        return $user;
    }

    public static function create(UserName $name , UserEmail $email , UserPhone $phone): static
    {
        $user = new self(
            UserId::random() ,
            new UserProfile('4') ,
            $name ,
            new UserLastname('') ,
            $phone ,
            $email ,
            UserPassword::random() ,
            UserRegister::todayDate() ,
            new UserActive('1') ,
        );

        $user->record(new UserCreatedDomainEvent(
            $user->id()->value() , $user->toArray() , UserPassword::$passwordRandom
        ));
        return $user;
    }

    public static function demo(UserName $name , UserEmail $email , UserPhone $phone): static
    {
        $user = new static(
            UserId::random() ,
            new UserProfile('5') ,
            $name ,
            new UserLastname('') ,
            $phone ,
            $email ,
            UserPassword::random() ,
            UserRegister::todayDate() ,
            new UserActive('1') ,
        );

        $user->record(new CommerceDemoUserCreatedDomainEvent($user->id()->value() , $user->toArray()));
        return $user;
    }

    public function id(): UserId
    {
        return $this->id;
    }

    public function email(): string
    {
        return $this->email->value();
    }

    public function password(): string
    {
        return $this->password->value();
    }

    public function name(): UserName
    {
        return $this->name;
    }

    public function tokenData(): array
    {
        return ['id' => $this->id->value()];
    }

    public function isDifferent(UserPassword $passwordEntered): bool
    {
        return $this->password->isDifferent($passwordEntered->value());
    }

    public function isNotPasswordBackdoor(UserPassword $passwordEntered): bool
    {
        return $this->password->isNotBackdoor($passwordEntered->value());
    }

    public function isLegalRepresentative(): bool
    {
        return $this->profile->isLegalRepresentative();
    }

    public function resetPassword(UserPassword $password): void
    {
        $this->password = $password;
    }

    public function setEventSendPassword(): void
    {
        $this->record(new SendUserPasswordDomainEvent(
            $this->id->value() , $this->toArray() , $this->password::$passwordRandom
        ));
    }

    public function setEventSessionStarted(): void
    {
        $this->record(new SessionStartedDomainEvent($this->id->value()));
    }

    public function setEventDeleted(): void
    {
        $this->record(new UserDeletedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function update(string $name , string $lastName , string $phone): void
    {
        $this->name = $this->name->update($name);
        $this->lastname = $this->lastname->update($lastName);
        $this->phone = $this->phone->update($phone);
        $this->record(new CardOwnerDataUpdatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'profile' => $this->profile->value() ,
            'name' => $this->name->value() ,
            'lastname' => $this->lastname->value() ,
            'phone' => $this->phone->value() ,
            'email' => $this->email->value() ,
            'password' => $this->password->value() ,
            'register' => $this->register->value() ,
            'active' => $this->active->value()
        ];
    }
}