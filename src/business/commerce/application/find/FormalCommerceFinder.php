<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\services\CommerceFinder;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;

final readonly class FormalCommerceFinder
{
    public function __construct(private CommerceFinder $finder)
    {
    }

    public function __invoke(CommerceId $commerceId): FormalCommerceResponse
    {
        $legalRepresentative = CommerceLegalRepresentative::empty();
        $commerce = $this->finder->commerce($commerceId , $legalRepresentative);

        if ($commerce->isInformal()) {
            $commerce = $this->finder->commerce(new CommerceId($commerce->father()->value()) , $legalRepresentative);
        }
        return new FormalCommerceResponse($commerce->toArray());
    }
}