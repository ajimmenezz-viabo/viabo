<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class StpAccountQueryHandler implements QueryHandler
{
    public function __construct(private StpAccountFinder $finder)
    {
    }

    public function __invoke(StpAccountQuery $query): Response
    {
        return $this->finder->__invoke(
            $query->userProfileId ,
            $query->userStpAccountId ,
            $query->commerceStpAccountId
        );
    }
}