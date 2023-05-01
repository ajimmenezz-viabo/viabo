<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\CardCommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommerceCardsQueryHandler implements QueryHandler
{
    public function __construct(private CommerceCardFinder $finder)
    {
    }

    public function __invoke(CommerceCardsQuery $query): Response
    {
        $commerceId = new CardCommerceId($query->commerceId);
        return $this->finder->__invoke($commerceId);
    }


}