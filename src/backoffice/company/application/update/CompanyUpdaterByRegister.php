<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\services\CompanyFinder;
use Viabo\backoffice\company\domain\services\CompanyUpdater as CommerceUpdaterService;
use Viabo\backoffice\company\domain\services\EnsureBusinessRules;
use Viabo\backoffice\shared\domain\commerce\CompanyLegalRepresentative;
use Viabo\backoffice\shared\domain\company\CompanyId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyUpdaterByRegister
{

    public function __construct(
        private CompanyRepository      $repository ,
        private CommerceUpdaterService $updater ,
        private EnsureBusinessRules    $businessRules ,
        private CompanyFinder          $commerceFinder ,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(
        string $companyId ,
        string $fiscalPersonType ,
        string $fiscalName ,
        string $tradeName ,
        string $rfc ,
        string $employees ,
        string $branchOffices ,
        string $pointSaleTerminal ,
        string $paymentApi ,
        string $registerStep
    ): void
    {
        $this->ensureTradeName($tradeName , $companyId , $registerStep);
        $company = $this->repository->search($companyId);
//        $commerce = $this->commerceFinder->commerce(new CompanyId($companyId) , CompanyLegalRepresentative::empty());
//        $company = $this->updater->byRegistration($company , [
//            'userId' => '' ,
//            'fiscalPersonType' => $fiscalPersonType ,
//            'fiscalName' => $fiscalName ,
//            'tradeName' => $tradeName ,
//            'rfc' => $rfc ,
//            'employees' => $employees ,
//            'branchOffices' => $branchOffices ,
//            'pointSaleTerminal' => $pointSaleTerminal ,
//            'paymentApi' => $paymentApi ,
//            'registerStep' => $registerStep
//        ]);
//        $this->repository->update($company);
//
//        $this->bus->publish(...$company->pullDomainEvents());
    }

    private function ensureTradeName(string $tradeName , string $companyId , string $registerStep): void
    {
        $registerStep = intval($registerStep);
        if ($registerStep > 2) {
            $this->businessRules->ensureTradeName($companyId , $tradeName);
        }
    }

}