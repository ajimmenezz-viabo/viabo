<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\business\commerce\domain\exceptions\CommerceRegisterStepEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceRegisterStep extends StringValueObject
{
    public static function update(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommerceRegisterStepEmpty();
        }
    }

    public static function start(): static
    {
        return new static('1');
    }

    public function isLastStep(): bool
    {
        $lastStep = '4';
        return $this->value === $lastStep;
    }

}