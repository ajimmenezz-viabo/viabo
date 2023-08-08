<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayRepository;

final readonly class CommercePayUrlCodeFinder
{
    public function __construct (private CommercePayRepository $repository)
    {
    }

    public function __invoke(CommercePayCommerceId $commerceId): FindCommercePayUrlCodeResponse
    {
        $commercePay = $this->repository->searchBy($commerceId);
        $commercePayData = $commercePay->toArray();

        return new FindCommercePayUrlCodeResponse([
            'urlCode' => $commercePayData['urlCode']
        ]);
    }
}
