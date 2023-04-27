<?php declare(strict_types=1);


namespace Viabo\business\documents\application\find;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindDocumentsCommerceQueryHandler implements QueryHandler
{
    public function __construct(private DocumentsFinder $finder)
    {
    }

    public function __invoke(FindDocumentsCommerceQuery $query): Response
    {
        $commerceId = new CommerceId($query->commerceId);

        return $this->finder->__invoke($commerceId);
    }
}