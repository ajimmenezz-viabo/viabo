<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommercesQueryHandler implements QueryHandler
{
    public function __construct(private CommercesFinder $finder)
    {
    }

    public function __invoke(CommercesQuery $command): Response
    {
        return $this->finder->__invoke();
    }
}