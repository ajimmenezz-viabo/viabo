<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain\services;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\exceptions\CommerceNotExist;
use Viabo\business\shared\domain\commerce\CommerceId;

final readonly class CommerceFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function finder(CommerceId $commerceId): Commerce
    {
        $commerce = $this->repository->search($commerceId);

        if (empty($commerce)) {
            throw new CommerceNotExist();
        }

        return $commerce;
    }
}