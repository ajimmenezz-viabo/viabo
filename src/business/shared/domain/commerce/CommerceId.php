<?php declare(strict_types=1);


namespace Viabo\business\shared\domain\commerce;


use InvalidArgumentException;
use Viabo\business\commerce\domain\exceptions\CommerceNotExist;
use Viabo\business\shared\domain\commerce\exceptions\CommerceIdEmpty;
use Viabo\shared\domain\valueObjects\UuidValueObject;

final class CommerceId extends UuidValueObject
{

    public static function create(string $value): self
    {
        try {
            self::validate($value);
            return new self($value);
        }catch (InvalidArgumentException){
            throw new CommerceNotExist();
        }

    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommerceIdEmpty();
        }
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