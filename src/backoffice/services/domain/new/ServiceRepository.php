<?php declare(strict_types=1);


namespace Viabo\backoffice\services\domain\new;


use Viabo\backoffice\services\domain\new\stp\ServiceStpBankAccount;
use Viabo\backoffice\services\domain\new\cardCloud\credentials\ServiceCardCloudCredentials;
use Viabo\shared\domain\criteria\Criteria;

interface ServiceRepository
{
    public function save(Service $service): void;

    public function search(string $id): Service|null;

    public function searchCriteria(Criteria $criteria): array;

    public function searchAvailableBankAccount(string $businessId): ServiceStpBankAccount;

    public function update(Service $service): void;

    public function updateBankAccount(Service $service): void;

    public function delete(Service $service): void;

    public function searchStpCardCredentials(string $businessId):ServiceCardCloudCredentials;
}
