<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\events\LegalRepresentativeCreatedDomainEvent;
use Viabo\security\user\domain\events\SessionStartedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class User extends AggregateRoot
{
    public function __construct(
        private readonly UserId       $id ,
        private readonly UserProfile  $profile ,
        private readonly UserName     $name ,
        private readonly UserLastname $lastname ,
        private readonly UserPhone    $phone ,
        private readonly UserEmail    $email ,
        private readonly UserPassword $password ,
        private readonly UserRegister $register ,
        private readonly UserActive   $active
    )
    {
    }

    public static function create(
        string $profile ,
        string $name ,
        string $lastname ,
        string $phone ,
        string $email ,
        string $password ,
        string $confirmPassword
    ): self
    {
        $user = new self(
            UserId::random() ,
            new UserProfile($profile) ,
            UserName::create($name) ,
            UserLastname::create($lastname) ,
            UserPhone::create($phone) ,
            UserEmail::create($email) ,
            UserPassword::create($password , $confirmPassword) ,
            UserRegister::todayDate() ,
            new UserActive('1') ,
        );

        $user->record(new LegalRepresentativeCreatedDomainEvent($user->id()->value() , $user->toArray()));

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

    public function tokenData(): array
    {
        return ['id' => $this->id->value()];
    }

    public function isDifferent(UserPassword $passwordEntered): bool
    {
        return $this->password->isDifferent($passwordEntered->value());
    }

    public function setEventSessionStarted(): void
    {
        $this->record(new SessionStartedDomainEvent($this->id->value()));
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