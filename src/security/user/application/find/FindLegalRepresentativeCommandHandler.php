<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\user\domain\UserEmail;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindLegalRepresentativeCommandHandler implements QueryHandler
{
    public function __construct(private LegalRepresentativeFinder $finder)
    {
    }

    public function __invoke(FindLegalRepresentativeCommand $command): Response
    {
        $userEmail = new UserEmail($command->username);

        return $this->finder->__invoke($userEmail);
    }
}