<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommercesQueryHandler implements QueryHandler
{
    public function __construct(private CommercesFinder $finder)
    {
    }

    public function __invoke(CommercesQuery $command): Response
    {
        return $this->finder->__invoke($command->userProfileId);
    }
}