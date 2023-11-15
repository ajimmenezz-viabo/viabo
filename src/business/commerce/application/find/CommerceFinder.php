<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\services\CommerceFinder as CommerceFinderService;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;

final readonly class CommerceFinder
{
    public function __construct(private CommerceFinderService $finder)
    {
    }

    public function __invoke(CommerceId $commerceId): CommerceResponse
    {
        $commerce = $this->finder->view($commerceId , CommerceLegalRepresentative::empty());
        return new CommerceResponse($commerce->toArray());
    }
}