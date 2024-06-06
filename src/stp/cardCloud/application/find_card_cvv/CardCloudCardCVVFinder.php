<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_card_cvv;

use Viabo\shared\domain\utils\Crypt;
use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudCardCVVFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $cardId): CardCloudServiceResponse
    {
        $cardCVV = $this->repository->searchCardCVV($businessId, $cardId);
        $cvv = Crypt::encrypt($cardCVV['cvv']) ?? '';
        $expirationDate = Crypt::encrypt(strval($cardCVV['expiration_date'])) ?? '';
        return new CardCloudServiceResponse(['cvv' => $cvv, 'expiration_date' => $expirationDate]);
    }
}
