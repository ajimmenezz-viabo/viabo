<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindNewCommercesQueryHandler implements QueryHandler
{
    public function __construct(private NewCommercesFinder $finder)
    {
    }

    public function __invoke(FindNewCommercesQuery $command): Response
    {
        return ($this->finder)();
    }
}