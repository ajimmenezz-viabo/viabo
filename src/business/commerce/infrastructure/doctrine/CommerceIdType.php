<?php declare(strict_types=1);


namespace Viabo\business\commerce\infrastructure\doctrine;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\infrastructure\persistence\UuidType;

final class CommerceIdType extends UuidType
{
    protected function typeClassName(): string
    {
        return CommerceId::class;
    }
}