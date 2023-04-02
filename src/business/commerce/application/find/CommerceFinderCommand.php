<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


final readonly class CommerceFinderCommand
{
    public function __construct(public string $legalRepresentative)
    {
    }
}