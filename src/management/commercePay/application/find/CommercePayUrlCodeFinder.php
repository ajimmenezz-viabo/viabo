<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\management\commercePay\domain\CommercePayReferenceId;
use Viabo\management\commercePay\domain\CommercePayRepository;

final readonly class CommercePayUrlCodeFinder
{
    public function __construct (private CommercePayRepository $repository)
    {
    }

    public function __invoke(CommercePayReferenceId $referenceId): FindCommercePayUrlCodeResponse
    {
        $commercePay = $this->repository->searchBy($referenceId);
        $commercePayData = $commercePay->toArray();

        return new FindCommercePayUrlCodeResponse([
            'urlCode' => $commercePayData['urlCode']
        ]);
    }
}
