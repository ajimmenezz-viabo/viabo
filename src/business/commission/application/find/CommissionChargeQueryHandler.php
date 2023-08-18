<?php declare(strict_types=1);


namespace Viabo\business\commission\application\find;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommissionChargeQueryHandler implements QueryHandler
{
    public function __construct(private CommissionChargeFinder $finder)
    {
    }

    public function __invoke(CommissionChargeQuery $query): Response
    {
        $commerceId = CommerceId::create($query->commerceId);
        $amount = floatval($query->amount);

        return $this->finder->__invoke($commerceId , $query->paymentProcessor, $amount);
    }
}