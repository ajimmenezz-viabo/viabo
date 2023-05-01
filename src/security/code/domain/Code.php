<?php declare(strict_types=1);


namespace Viabo\security\code\domain;


use Viabo\security\code\domain\events\CodeCreatedDomainEvent;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final  class Code extends AggregateRoot
{
    public function __construct(
        private readonly CodeId       $id ,
        private readonly UserId       $userId ,
        private readonly CodeValue    $value ,
        private readonly CodeRegister $register ,
    )
    {
    }

    public static function create(UserId $userId): self
    {
        return new self(
            new CodeId('') ,
            $userId ,
            CodeValue::random() ,
            CodeRegister::todayDate()
        );

    }

    public function setEventCreated(array $userData): void
    {
        $userData['code'] = $this->value->value();
        $this->record(new CodeCreatedDomainEvent($this->userId->value() , $userData));
    }

    public function isNotSame(CodeValue $verificationCode): bool
    {
        return $this->value->isNotSame($verificationCode->value());
    }

    public function isExpired(): bool
    {
        return $this->register->isExpired();
    }
}