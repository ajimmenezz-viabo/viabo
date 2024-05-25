<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\create_sub_account;

use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudSubAccountCreator
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $companyId, string $rfc): CardCloudSubAccountResponse
    {
        $apiResponse = $this->repository->createAccount($businessId, $companyId, $rfc);
        return new CardCloudSubAccountResponse($apiResponse);
    }
}
