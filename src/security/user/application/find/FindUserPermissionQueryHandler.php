<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindUserPermissionQueryHandler implements QueryHandler
{
    public function __construct(private UserPermissionsFinder $finder)
    {
    }

    public function __invoke(FindUserPermissionQuery $query): Response
    {
        $userId = new UserId($query->userId);
        return ($this->finder)($userId);
    }
}