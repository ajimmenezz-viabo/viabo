<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\find;


use Viabo\business\commerceUser\domain\CommerceUserId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommerceQueryHandlerByUser implements QueryHandler
{
    public function __construct(private CommerceFinderByUser $finder)
    {
    }

    public function __invoke(CommerceQueryByUser $query): Response
    {
        $userId = CommerceUserId::create($query->userId);

        return $this->finder->__invoke($userId);
    }
}