<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\query\QueryHandler;

final readonly class FindCommerceQueryHandler implements QueryHandler
{
    public function __construct(private CommerceFinder $finder)
    {
    }

    public function __invoke(FindCommerceQuery $command): CommerceResponse
    {
        $legalRepresentative = new CommerceLegalRepresentative($command->legalRepresentative);
        return ($this->finder)($legalRepresentative);
    }
}