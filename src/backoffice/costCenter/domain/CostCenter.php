<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


use Viabo\backoffice\costCenter\domain\events\CostCenterCreatedDomainEvent;
use Viabo\backoffice\costCenter\domain\events\CostCenterUpdatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CostCenter extends AggregateRoot
{
    private $users;

    public function __construct(
        private CostCenterId            $id,
        private CostCenterFolio         $folio,
        private CostCenterName          $name,
        private CostCenterUpdatedByUser $updatedByUser,
        private CostCenterUpdateDate    $updateDate,
        private CostCenterCreatedByUser $createdByUser,
        private CostCenterCreateDate    $createDate,
        private CostCenterActive        $active
    )
    {
        $this->users = new CostCenterUsers();
    }

    public static function create(
        string $userId,
        string $costCenterId,
        string $folio,
        string $name,
        array  $users
    ): static
    {
        $costCenter = new static(
            new CostCenterId($costCenterId),
            CostCenterFolio::create($folio),
            CostCenterName::create($name),
            CostCenterUpdatedByUser::empty(),
            CostCenterUpdateDate::empty(),
            new CostCenterCreatedByUser($userId),
            CostCenterCreateDate::todayDate(),
            CostCenterActive::enable(),
        );
        $costCenter->setUsers($users);
        $costCenter->record(new CostCenterCreatedDomainEvent($costCenter->id(), $costCenter->toArray()));

        return $costCenter;
    }

    private function id(): string
    {
        return $this->id->value();
    }

    public function folio(): string
    {
        return $this->folio->value();
    }

    public function setUsers(array $users): void
    {
        array_map(function (CostCenterUser $user) {
            $this->users->add($user);
        }, $users);
    }

    private function users(): array
    {
        return array_map(function (CostCenterUser $user) {
            return $user->toArray();
        }, $this->users->toArray());
    }

    public function update(
        string $userId,
        string $name,
        array  $users
    ): void
    {
        $this->users->clear();
        $this->setUsers($users);
        $this->name = $this->name->update($name);
        $this->updatedByUser = $this->updatedByUser->update($userId);
        $this->updateDate = CostCenterUpdateDate::todayDate();

        $this->record(new CostCenterUpdatedDomainEvent($this->id(), $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'folio' => $this->folio->value(),
            'name' => $this->name->value(),
            'users' => $this->users(),
            'updatedByUser' => $this->updatedByUser->value(),
            'updateDate' => $this->updateDate->value(),
            'createdByUser' => $this->createdByUser->value(),
            'createDate' => $this->createDate->value(),
            'active' => $this->active->value()
        ];
    }
}