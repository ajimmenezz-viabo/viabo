<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FormalCommerceQueryHandler implements QueryHandler
{
    public function __construct(private FormalCommerceFinder $finder)
    {
    }

    public function __invoke(FormalCommerceQuery $query): Response
    {
        $commerceId = CommerceId::create($query->commerceId);
        return ($this->finder)($commerceId);
    }
}