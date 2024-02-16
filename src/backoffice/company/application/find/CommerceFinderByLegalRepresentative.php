<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\services\CompanyFinder as CommerceFinderServiceDomain;
use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\backoffice\shared\domain\commerce\CompanyLegalRepresentative;

final readonly class CommerceFinderByLegalRepresentative
{
    public function __construct( private CommerceFinderServiceDomain $finder)
    {
    }

    public function __invoke(CompanyLegalRepresentative $legalRepresentative): CompanyResponse
    {
        $commerce = $this->finder->view(CompanyId::empty() , $legalRepresentative);
        return new CompanyResponse($commerce->toArray());
    }
}