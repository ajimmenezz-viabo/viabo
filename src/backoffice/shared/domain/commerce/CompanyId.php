<?php declare(strict_types=1);


namespace Viabo\backoffice\shared\domain\commerce;


use InvalidArgumentException;
use Viabo\backoffice\company\domain\exceptions\CompanyNotExist;
use Viabo\backoffice\shared\domain\commerce\exceptions\CommerceIdEmpty;
use Viabo\shared\domain\valueObjects\UuidValueObject;

final class CompanyId extends UuidValueObject
{

    public static function create(string $value): self
    {
        try {
            self::validate($value);
            return new self($value);
        }catch (InvalidArgumentException){
            throw new CompanyNotExist();
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

    public function isDifferent(string $value): bool
    {
        return $this->value !== $value;
    }
}