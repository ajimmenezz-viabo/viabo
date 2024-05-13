<?php declare(strict_types=1);


namespace Viabo\backoffice\services\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\services\domain\new\card\CardService;
use Viabo\backoffice\services\domain\new\pay\PayService;
use Viabo\backoffice\services\domain\new\Service;
use Viabo\backoffice\services\domain\new\ServiceRepository;
use Viabo\backoffice\services\domain\new\stp\ServiceStp;
use Viabo\backoffice\services\domain\new\stp\ServiceStpBankAccount;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class ServiceDoctrineRepositoryNew extends DoctrineRepository implements ServiceRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function save(Service $service): void
    {
        $this->persist($service);
        $this->updateBankAccount($service);
    }

    public function search(string $id): Service|null
    {
        return $this->repository(Service::class)->find($id);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Service::class)->matching($criteriaConvert)->toArray();
    }

    public function searchAvailableBankAccount(): ServiceStpBankAccount
    {
        return $this->repository(ServiceStpBankAccount::class)->findOneBy(['available' => '1'], ['id' => 'asc']);
    }

    public function update(Service $service): void
    {
        $this->entityManager()->flush($service);
    }

    private function updateBankAccount(Service $service): void
    {
        if($service instanceof ServiceStp){
            $bankAccount = $this->repository(ServiceStpBankAccount::class)->find($service->bankAccountId());
            $bankAccount->disable();
            $this->entityManager()->flush($bankAccount);
        }
    }

    public function delete(Service $service): void
    {
        $this->remove($service);
        $table = '';
        if ($service instanceof PayService) {
            $table = 't_backoffice_companies_service_pay';
        }

        if ($service instanceof CardService) {
            $table = 't_backoffice_companies_service_card';
        }

        if ($service instanceof ServiceStp) {
            $table = 't_backoffice_companies_service_stp';
            $bankAccount = $this->repository(ServiceStpBankAccount::class)->find($service->bankAccountId());
            $bankAccount->enable();
            $this->entityManager()->flush($bankAccount);
        }

        $query = "DELETE FROM $table WHERE Id = :id";
        $statement = $this->entityManager()->getConnection()->prepare($query);
        $statement->bindValue('id', $service->id());
        $statement->execute();
    }
}