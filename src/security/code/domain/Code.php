<?php declare(strict_types=1);


namespace Viabo\security\code\domain;


use Viabo\security\code\domain\events\CodeCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final  class Code extends AggregateRoot
{
    public function __construct(
        private readonly CodeId       $id ,
        private readonly CodeUserId   $userId ,
        private readonly CodeValue    $value ,
        private readonly CodeRegister $register ,
    )
    {
    }

    public static function create(CodeUserId $userId): self
    {
        return new self(
            new CodeId('') ,
            $userId ,
            CodeValue::random() ,
            CodeRegister::create()
        );

    }

    public function setEventCreated(array $userData): void
    {
        $userData['code'] = $this->value->value();
        $this->record(new CodeCreatedDomainEvent(
            $this->userId->value() , $userData
        ));
    }

    public function isNotSame(string $verificationCode): bool
    {
        return $this->value->isNotSame($verificationCode);
    }

    public function isExpired(): bool
    {
        return $this->register->isExpired();
    }
}