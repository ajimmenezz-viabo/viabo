<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\services\CommerceFinder as CommerceFinderServiceDomain;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;

final readonly class CommerceFinder
{
    public function __construct( private CommerceFinderServiceDomain $finder)
    {
    }

    public function commerce(CommerceId $commerceId, CommerceLegalRepresentative $legalRepresentative): CommerceResponse
    {
        $commerce = $this->finder->commerce($commerceId , $legalRepresentative);
        return new CommerceResponse($commerce->toArray());
    }

    public function view(CommerceId $commerceId, CommerceLegalRepresentative $legalRepresentative): CommerceResponse
    {
        $commerce = $this->finder->view($commerceId , $legalRepresentative);
        return new CommerceResponse($commerce->toArray());
    }
}