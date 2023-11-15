<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\services\CommerceFinder as CommerceFinderServiceDomain;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;

final readonly class CommerceFinderByLegalRepresentative
{
    public function __construct( private CommerceFinderServiceDomain $finder)
    {
    }

    public function __invoke(CommerceLegalRepresentative $legalRepresentative): CommerceResponse
    {
        $commerce = $this->finder->view(CommerceId::empty() , $legalRepresentative);
        return new CommerceResponse($commerce->toArray());
    }
}