<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CardsCommerceQueryHandler implements QueryHandler
{
    public function __construct(private CardsCommerceFinder $finder)
    {
    }

    public function __invoke(CardsCommerceQuery $query): Response
    {
        $commerceId = new CommerceId($query->commerceId);
        return $this->finder->__invoke($commerceId);
    }
}