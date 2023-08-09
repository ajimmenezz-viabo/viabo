<?php declare(strict_types=1);


namespace Viabo\management\commercePay\application\update;


use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayStatusId;
use Viabo\management\commercePay\domain\exceptions\CommercePayNotExist;
use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommercePayUpdater
{
    public function __construct(private CommercePayRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(CommercePayId $id , CommercePayStatusId $statusId): void
    {
        $commercePay = $this->repository->search($id);

        if(empty($commercePay)){
            throw new CommercePayNotExist();
        }

        $commercePay->update($statusId);
        $this->repository->update($commercePay);

        $this->bus->publish(...$commercePay->pullDomainEvents());
    }
}