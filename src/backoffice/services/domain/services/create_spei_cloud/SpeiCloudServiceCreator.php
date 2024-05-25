<?php declare(strict_types=1);

namespace Viabo\backoffice\services\domain\services\create_spei_cloud;

use Viabo\backoffice\services\domain\new\ServiceFactory;
use Viabo\backoffice\services\domain\new\ServiceRepository;

final readonly class SpeiCloudServiceCreator
{
    public function __construct(
        private ServiceRepository $repository
    )
    {
    }

    public function __invoke(array $company): array
    {
        $bankAccount = $this->repository->searchAvailableBankAccount($company['businessId']);
        $company['type'] = '4';
        $company['bankAccountId'] = $bankAccount->id();
        $service = ServiceFactory::create($company);
        $this->repository->save($service);
        $this->repository->updateBankAccount($service);
        return array_merge($service->toArray(), ['bankAccountNumber' => $bankAccount->number()]);
    }
}
