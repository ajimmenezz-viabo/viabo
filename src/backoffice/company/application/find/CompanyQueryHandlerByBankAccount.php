<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CompanyQueryHandlerByBankAccount implements QueryHandler
{
    public function __construct(private CompanyFinderByBankAccount $finder)
    {
    }

    public function __invoke(CompanyQueryByBankAccount $query): Response
    {
        return $this->finder->__invoke($query->bankAccountNumber);
    }
}