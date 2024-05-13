<?php declare(strict_types=1);


namespace Viabo\stp\stpAccount\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class StpAccountQueryHandlerByCompany implements QueryHandler
{
    public function __construct(private StpAccountFinderByCriteria $finder)
    {
    }

    public function __invoke(StpAccountQueryByCompany $query): Response
    {
        $filter = [['field' => 'company.value', 'operator' => '=', 'value' => $query->company]];
        return $this->finder->__invoke($filter);
    }
}