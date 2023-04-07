<?php declare(strict_types=1);


namespace Viabo\business\commerce\infrastructure\doctrine;


use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\infrastructure\persistence\UuidType;

final class LegalRepresentativeType extends UuidType
{
    protected function typeClassName(): string
    {
        return CommerceLegalRepresentative::class;
    }
}