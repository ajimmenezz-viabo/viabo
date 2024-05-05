<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class ConcentratorQueryHandler implements QueryHandler
{
    public function __construct(private ConcentratorFinder $finder)
    {
    }

    public function __invoke(ConcentratorQuery $query): Response
    {
        return $this->finder->__invoke($query->businessId);
    }
}