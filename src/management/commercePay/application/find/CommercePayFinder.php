<?php declare(strict_types=1);


namespace Viabo\management\commercePay\application\find;


use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\exceptions\CommercePayUrlCodeNotExist;
use Viabo\management\shared\domain\commercePay\CommercePayId;

final readonly class CommercePayFinder
{
    public function __construct(private CommercePayRepository $repository)
    {
    }

    public function __invoke(CommercePayId $commercePayId): CommercePayResponse
    {
        $commercePay = $this->repository->searchView($commercePayId);

        if(empty($commercePay)){
            throw new CommercePayUrlCodeNotExist();
        }

        return new CommercePayResponse($commercePay->toArray());
    }
}