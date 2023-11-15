<?php declare(strict_types=1);


namespace Viabo\business\commission\application\find;


use Viabo\business\commission\domain\Commission;
use Viabo\business\commission\domain\CommissionRepository;
use Viabo\business\shared\domain\commerce\CommerceId;

final readonly class CommissionChargeFinder
{
    public function __construct(private CommissionRepository $repository)
    {
    }

    public function __invoke(CommerceId $commerceId , string $paymentProcessor , float $amount): CommissionResponse
    {
        $commission = $this->repository->search($commerceId);

        if (empty($commission)) {
            $commission = Commission::empty($commerceId);
            $this->repository->save($commission);
        }

        $commission->calculateInputFor($paymentProcessor , $amount);

        return new CommissionResponse($commission->charge()->toArray());
    }
}