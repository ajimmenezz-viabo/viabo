<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class StpAccountsQueryHandler implements QueryHandler
{
    public function __construct(private StpAccountsFinder $finder)
    {
    }

    public function __invoke(StpAccountsQuery $query): Response
    {
        return $this->finder->__invoke();
    }
}