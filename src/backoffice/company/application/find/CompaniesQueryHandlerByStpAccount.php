<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CompaniesQueryHandlerByStpAccount implements QueryHandler
{
    public function __construct(private CompanyCriteriaFinder $finder)
    {
    }

    public function __invoke(CompaniesQueryByStpAccount $query): Response
    {
        $filters = [
            ['field' => 'services' , 'operator' => 'CONTAINS' , 'value' => $query->stpAccountId ]
        ];
        return $this->finder->__invoke($filters);
    }
}