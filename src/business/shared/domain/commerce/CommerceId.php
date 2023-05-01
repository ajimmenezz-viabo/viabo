<?php declare(strict_types=1);


namespace Viabo\business\shared\domain\commerce;


use Viabo\shared\domain\valueObjects\UuidValueObject;

final class CommerceId extends UuidValueObject
{
    public static function create(): self
    {
        return new self(self::random()->value());
    }

    public static function empty(): static
    {
        $commerceId = parent::random();
        $commerceId->setEmpty();
        return $commerceId;
    }

    private function setEmpty(): void
    {
        $this->value = '';
    }

    public function isNotEmpty(): bool
    {
        return !empty($this->value);
    }
}