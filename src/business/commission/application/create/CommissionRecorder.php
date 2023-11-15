<?php declare(strict_types=1);


namespace Viabo\business\commission\application\create;


use Viabo\business\commission\domain\Commission;
use Viabo\business\commission\domain\CommissionPay;
use Viabo\business\commission\domain\CommissionRepository;
use Viabo\business\commission\domain\CommissionSpeiInCarnet;
use Viabo\business\commission\domain\CommissionSpeiInMasterCard;
use Viabo\business\commission\domain\CommissionSpeiOutCarnet;
use Viabo\business\commission\domain\CommissionSpeiOutMasterCard;
use Viabo\business\commission\domain\CommissionUpdateByUser;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommissionRecorder
{
    public function __construct(private CommissionRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(
        CommissionUpdateByUser      $updateByUser ,
        CommerceId                  $commerceId ,
        CommissionSpeiInCarnet      $speiInCarnet ,
        CommissionSpeiInMasterCard  $speiInMasterCard ,
        CommissionSpeiOutCarnet     $speiOutCarnet ,
        CommissionSpeiOutMasterCard $speiOutMasterCard ,
        CommissionPay               $pay
    ): void
    {
        $commission = $this->repository->search($commerceId);

        if (empty($commission)) {
            $commission = Commission::create(
                $commerceId ,
                $speiInCarnet ,
                $speiInMasterCard ,
                $speiOutCarnet ,
                $speiOutMasterCard ,
                $pay ,
                $updateByUser
            );
            $this->repository->save($commission);
            $this->bus->publish(...$commission->pullDomainEvents());
            return;
        }

        $commission->update(
            $speiInCarnet ,
            $speiInMasterCard ,
            $speiOutCarnet ,
            $speiOutMasterCard ,
            $pay ,
            $updateByUser
        );

        $this->repository->update($commission);
        $this->bus->publish(...$commission->pullDomainEvents());
    }
}