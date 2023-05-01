<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindUserQueryHandler implements QueryHandler
{
    public function __construct(private UserFinder $finder)
    {
    }

    public function __invoke(FindUserQuery $query): Response
    {
        $userId = new UserId($query->userId);
        $userEmail = new UserEmail($query->userEmail);

        return ($this->finder)($userId , $userEmail);
    }
}