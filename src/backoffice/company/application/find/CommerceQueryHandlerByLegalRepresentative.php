<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\shared\domain\commerce\CompanyLegalRepresentative;
use Viabo\shared\domain\bus\query\QueryHandler;

final readonly class CommerceQueryHandlerByLegalRepresentative implements QueryHandler
{
    public function __construct(private CommerceFinderByLegalRepresentative $finder)
    {
    }

    public function __invoke(CommerceQueryByLegalRepresentative $command): CommerceResponse
    {
        $legalRepresentative = new CompanyLegalRepresentative($command->legalRepresentative);
        return $this->finder->__invoke($legalRepresentative);
    }
}