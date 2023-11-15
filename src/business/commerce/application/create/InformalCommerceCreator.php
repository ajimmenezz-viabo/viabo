<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceTradeName;

final readonly class InformalCommerceCreator
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(CommerceTradeName $commerceTradeName): void
    {
        $commerce = Commerce::createInformal($commerceTradeName);
        $this->repository->save($commerce);
    }
}