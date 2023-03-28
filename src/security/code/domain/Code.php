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
        private readonly CodeType     $type ,
        private readonly CodeRegister $register ,
        private readonly CodeStatus   $status
    )
    {
    }

    public static function create(string $userId, string $codeType): self
    {
        return new self(
            new CodeId(''),
            new CodeUserId($userId),
            CodeValue::random(),
            new CodeType($codeType),
            CodeRegister::create(),
            new CodeStatus('Pending')
        );

    }

    public function setEventCreated(array $userData): void
    {
        $userData['code'] = $this->value->value();
        $this->record(new CodeCreatedDomainEvent(
            $this->userId->value(), $userData
        ));
    }
}