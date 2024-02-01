<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class TransactionQueryHandlerByReference implements QueryHandler
{
    public function __construct(private TransactionFinderByCriteria $finder)
    {
    }

    public function __invoke(TransactionQueryByReference $query): Response
    {
        return $this->finder->__invoke([
            ['field' => 'reference.value', 'operator' => '=', 'value' => "$query->referenceNumber"]
        ]);
    }
}