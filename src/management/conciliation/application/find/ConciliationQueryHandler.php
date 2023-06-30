<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\domain\ConciliationReferenceNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class ConciliationQueryHandler implements QueryHandler
{
    public function __construct(private ConciliationFinder $finder)
    {
    }

    public function __invoke(ConciliationQuery $query): Response
    {
        $referenceNumber = ConciliationReferenceNumber::create(strval($query->referenceNumber));

        return $this->finder->__invoke($referenceNumber);
    }
}