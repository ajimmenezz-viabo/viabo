<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class UserProfile extends StringValueObject
{
    public static function cardHolder(): static
    {
        $cardHolderProfileId = '4';
        return new static($cardHolderProfileId);
    }

    public function isLegalRepresentative(): bool
    {
        $legalRepresentativeProfileId = '3';
        return $this->value === $legalRepresentativeProfileId;
    }
}