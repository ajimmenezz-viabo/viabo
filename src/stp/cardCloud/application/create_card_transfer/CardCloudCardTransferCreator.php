<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\create_card_transfer;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final class CardCloudCardTransferCreator
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(
        string $businessId,
        string $sourceType,
        string $source,
        string $destinationType,
        string $destination,
        float  $amount,
        string $description
    ): CardCloudServiceResponse
    {
        $transferData = [
            'sourceType' => $sourceType,
            'source' => $source,
            'destinationType' => $destinationType,
            'destination' => $destination,
            'amount' => $amount,
            'description' => $description
        ];
        return new CardCloudServiceResponse(
            $this->repository->createTransfer($businessId, $transferData)
        );
    }
}
