<?php declare(strict_types=1);


namespace Viabo\security\module\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindUserModelsQueryHandler implements QueryHandler
{
    public function __construct(private UserModelsFinder $finder)
    {
    }

    public function __invoke(FindUserModelsQuery $query): Response
    {
        return ($this->finder)($query->userPermissions);
    }
}