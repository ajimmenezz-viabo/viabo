<?php declare(strict_types=1);


namespace Viabo\security\code\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CodeRegister extends DateTimeValueObject
{
    public static function create(): self
    {
        return new self(self::todayDate());
    }

    public function isExpired(): bool
    {
        $this->setDate();
        $diffMinutes = $this->date->diffInMinutes($this->value , $this->date->dateTime());
        return $diffMinutes > 60;
    }
}