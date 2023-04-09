<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\events\LegalRepresentativeCreatedDomainEvent;
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
            UserRegister::create() ,
            new UserActive('1') ,
        );

        $user->record(new LegalRepresentativeCreatedDomainEvent($user->id() , $user->id() , $user->toArray()));

        return $user;
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function email(): string
    {
        return $this->email->value();
    }

    public function password(): string
    {
        return $this->password->value();
    }

    public function toArray(): array
    {
        return [
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