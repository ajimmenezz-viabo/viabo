<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\update_card_block_status;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudCardBlockStatusUpdater
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $cardId, string $blockStatus): CardCloudServiceResponse
    {
        return new CardCloudServiceResponse(
            $this->getCardStatus($businessId, $cardId, $blockStatus)
        );
    }

    public function getCardStatus(string $businessId, string $cardId, string $blockStatus): array
    {
        $cardStatus = $this->repository->updateCardBlockStatus($businessId, $cardId, $blockStatus);
        return $this->format($blockStatus, $cardStatus);
    }

    private function format(string $blockStatus, array $cardBlockStatus): array
    {
        $message = ['block' => 'Tarjeta bloqueada correctamente', 'unblock' => 'Tarjeta desbloqueada correctamente'];
        $cardBlockStatus['message'] = $message[$blockStatus];
        return $cardBlockStatus;
    }
}
