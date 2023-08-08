<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayUrlCode;
use Viabo\management\commercePay\domain\exceptions\CommercePayNotAvailable;

final readonly class CommercePayFinder
{
    public function __construct(private CommercePayRepository $repository)
    {
    }

    public function __invoke(CommercePayUrlCode $urlCode):FindCommercePayResponse
    {
        $commercePay = $this->repository->search($urlCode);
        $commercePayActive = $commercePay->active()->value();

        if (empty($commercePay) || empty($commercePayActive)){
            throw new CommercePayNotAvailable();
        }
        return new FindCommercePayResponse($commercePay->toArray());
    }
}
