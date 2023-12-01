<?php declare(strict_types=1);


namespace Viabo\business\commission\application\create;


use Viabo\business\commission\domain\Commission;
use Viabo\business\commission\domain\CommissionRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommissionRecorder
{
    public function __construct(private CommissionRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(
        string $updateByUser ,
        string $commerceId ,
        float  $speiInCarnet ,
        float  $speiInMasterCard ,
        float  $speiOutCarnet ,
        float  $speiOutMasterCard ,
        float  $pay ,
        float  $sharedTerminal
    ): void
    {
        $commission = $this->repository->search(CommerceId::create($commerceId));

        if (empty($commission)) {
            $commission = Commission::create(
                $commerceId ,
                $speiInCarnet ,
                $speiInMasterCard ,
                $speiOutCarnet ,
                $speiOutMasterCard ,
                $pay ,
                $sharedTerminal ,
                $updateByUser
            );
            $this->repository->save($commission);
        } else {
            $commission->update(
                $speiInCarnet ,
                $speiInMasterCard ,
                $speiOutCarnet ,
                $speiOutMasterCard ,
                $pay ,
                $sharedTerminal ,
                $updateByUser
            );
            $this->repository->update($commission);
        }

        $this->bus->publish(...$commission->pullDomainEvents());
    }
}