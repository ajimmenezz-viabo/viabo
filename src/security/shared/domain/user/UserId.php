<?php declare(strict_types=1);


namespace Viabo\security\shared\domain\user;


use Viabo\shared\domain\valueObjects\UuidValueObject;

final class UserId extends UuidValueObject
{
    public static function empty(): static
    {
        $userId = parent::random();
        $userId->setEmpty();
        return $userId;
    }

    public function isNotEmpty(): bool
    {
        return !empty($this->value);
    }

    private function setEmpty(): void
    {
        $this->value = '';
    }
}