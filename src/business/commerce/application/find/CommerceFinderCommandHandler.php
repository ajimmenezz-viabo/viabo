<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;

final readonly class CommerceFinderCommandHandler
{
    public function __construct(private CommerceFinder $finder)
    {
    }

    public function __invoke(CommerceFinderCommand $command): array
    {
        $legalRepresentative = new CommerceLegalRepresentative($command->legalRepresentative);
        return ($this->finder)($legalRepresentative);
    }
}