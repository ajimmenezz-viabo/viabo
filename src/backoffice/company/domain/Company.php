<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain;


use Viabo\backoffice\company\domain\events\CommerceUpdatedDomainEvent;
use Viabo\backoffice\company\domain\events\CompanyActiveUpdatedDomainEvent;
use Viabo\backoffice\company\domain\events\CompanyCreatedDomainEvent;
use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\backoffice\shared\domain\commerce\CompanyLegalRepresentative;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Company extends AggregateRoot
{


    private $costCenters;
    private $users;
    private $bankAccounts;

    public function __construct(
        private CompanyId                  $id,
        private CompanyFolio               $folio,
        private CompanyFatherId            $fatherId,
        private CompanyLegalRepresentative $legalRepresentative,
        private CompanyFiscalPersonType    $fiscalPersonType,
        private CompanyFiscalName          $fiscalName,
        private CompanyTradeName           $tradeName,
        private CompanyRfc                 $rfc,
        private CompanyPostalAddress       $postalAddress,
        private CompanyPhoneNumbers        $phoneNumbers,
        private CompanyLogo                $logo,
        private CompanySlug                $slug,
        private CompanyBalance             $balance,
        private CompanyPublicTerminal      $publicTerminal,
        private CompanyEmployees           $employees,
        private CompanyBranchOffices       $branchOffices,
        private CompanyPointSaleTerminal   $pointSaleTerminal,
        private CompanyPaymentApi          $paymentApi,
        private CompanyType                $type,
        private CompanyAllowTransactions   $allowTransactions,
        private CompanyStatusId            $statusId,
        private CompanyStpAccountId        $stpAccountId,
        private CompanyRegisterStep        $registerStep,
        private CompanyUpdatedByUser       $updatedByUser,
        private CompanyUpdateDate          $updateDate,
        private CompanyCreatedByUser       $createdByUser,
        private CompanyRegister            $register,
        private CompanyActive              $active
    )
    {
        $this->costCenters = new CompanyCostCenters();
        $this->users = new CompanyUsers();
        $this->bankAccounts = new CompanyBankAccounts();
    }

    public static function create(string $legalRepresentative): self
    {
        $commerce = new self(
            CompanyId::random(),
            CompanyFolio::empty(),
            CompanyFatherId::empty(),
            new CompanyLegalRepresentative($legalRepresentative),
            CompanyFiscalPersonType::empty(),
            CompanyFiscalName::empty(),
            CompanyTradeName::empty(),
            CompanyRfc::empty(),
            CompanyPostalAddress::empty(),
            CompanyPhoneNumbers::empty(),
            CompanyLogo::empty(),
            CompanySlug::empty(),
            CompanyBalance::empty(),
            CompanyPublicTerminal::empty(),
            CompanyEmployees::empty(),
            CompanyBranchOffices::empty(),
            CompanyPointSaleTerminal::empty(),
            CompanyPaymentApi::empty(),
            CompanyType::formal(),
            CompanyAllowTransactions::enable(),
            CompanyStatusId::record(),
            CompanyStpAccountId::empty(),
            CompanyRegisterStep::start(),
            CompanyUpdatedByUser::empty(),
            CompanyUpdateDate::empty(),
            CompanyCreatedByUser::empty(),
            CompanyRegister::todayDate(),
            CompanyActive::enable()
        );

        $commerce->record(new CompanyCreatedDomainEvent($commerce->id->value(), $commerce->toArray()));

        return $commerce;
    }

    public static function createInformal(CompanyTradeName $commerceTradeName): static
    {
        return new static(
            CompanyId::random(),
            CompanyFolio::empty(),
            CompanyFatherId::empty(),
            CompanyLegalRepresentative::empty(),
            CompanyFiscalPersonType::empty(),
            CompanyFiscalName::empty(),
            $commerceTradeName,
            CompanyRfc::empty(),
            CompanyPostalAddress::empty(),
            CompanyPhoneNumbers::empty(),
            CompanyLogo::empty(),
            CompanySlug::empty(),
            CompanyBalance::empty(),
            CompanyPublicTerminal::empty(),
            CompanyEmployees::empty(),
            CompanyBranchOffices::empty(),
            CompanyPointSaleTerminal::empty(),
            CompanyPaymentApi::empty(),
            CompanyType::validation(),
            CompanyAllowTransactions::empty(),
            CompanyStatusId::affiliate(),
            CompanyStpAccountId::empty(),
            CompanyRegisterStep::concluded(),
            CompanyUpdatedByUser::empty(),
            CompanyUpdateDate::empty(),
            CompanyCreatedByUser::empty(),
            CompanyRegister::todayDate(),
            CompanyActive::enable()
        );
    }

    public static function createByStp(
        string $userId,
        string $companyId,
        string $folio,
        string $fiscalName,
        string $commercialName,
        string $rfc,
        array  $bankAccount,
        array  $assignedUsers,
        array  $centerCosts
    ): static
    {
        $commercialName = empty($commercialName) ? $fiscalName : $commercialName;
        $company = new static(
            new CompanyId($companyId),
            CompanyFolio::create($folio),
            CompanyFatherId::empty(),
            new CompanyLegalRepresentative($userId),
            CompanyFiscalPersonType::empty(),
            CompanyFiscalName::create($fiscalName),
            new CompanyTradeName($commercialName),
            CompanyRfc::create($rfc),
            CompanyPostalAddress::empty(),
            CompanyPhoneNumbers::empty(),
            CompanyLogo::empty(),
            CompanySlug::empty(),
            CompanyBalance::empty(),
            CompanyPublicTerminal::empty(),
            CompanyEmployees::empty(),
            CompanyBranchOffices::empty(),
            CompanyPointSaleTerminal::empty(),
            CompanyPaymentApi::empty(),
            CompanyType::formal(),
            CompanyAllowTransactions::empty(),
            CompanyStatusId::affiliate(),
            CompanyStpAccountId::empty(),
            CompanyRegisterStep::concluded(),
            CompanyUpdatedByUser::empty(),
            CompanyUpdateDate::empty(),
            new CompanyCreatedByUser($userId),
            CompanyRegister::todayDate(),
            CompanyActive::enable()
        );
        $company->setCostCenter($centerCosts);
        $company->setUsers($assignedUsers);
        $company->setBankAccount($bankAccount);
        $company->record(new CompanyCreatedDomainEvent($company->id(), $company->toArray()));

        return $company;
    }

    public function update(
        string $userId,
        string $fiscalPersonType,
        string $fiscalName,
        string $tradeName,
        string $rfc,
        string $postalAddress,
        string $phoneNumbers,
        array  $logoData,
        string $slug,
        string $publicTerminal,
        string $employees,
        string $branchOffices,
        string $pointSaleTerminal,
        string $paymentApi,
        string $registerStep
    ): void
    {
        $this->fiscalPersonType = $this->fiscalPersonType->update($fiscalPersonType);
        $this->fiscalName = $this->fiscalName->update($fiscalName);
        $this->tradeName = $this->tradeName->update($tradeName, $registerStep);
        $this->rfc = $this->rfc->update($rfc);
        $this->postalAddress = $this->postalAddress->update($postalAddress);
        $this->phoneNumbers = $this->phoneNumbers->update($phoneNumbers);
        $this->logo = $this->logo->update($logoData, $this->id());
        $this->slug = $this->slug->update($slug);
        $this->publicTerminal = $this->publicTerminal->update($publicTerminal);
        $this->employees = $this->employees->update($employees);
        $this->branchOffices = $this->branchOffices->update($branchOffices);
        $this->pointSaleTerminal = $this->pointSaleTerminal->update($pointSaleTerminal);
        $this->paymentApi = $this->paymentApi->update($paymentApi);
        $this->registerStep = $this->registerStep->update($registerStep);
        $this->statusId = $this->statusId->update($this->registerStep->isLastStep());
        $this->updatedByUser = $this->updatedByUser->update($userId);
        $this->updateDate = $this->updateDate->todayDate();

        $this->record(new CommerceUpdatedDomainEvent($this->id->value(), $this->toArray()));
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function slug(): string
    {
        return $this->slug->value();
    }

    public function isInformal(): bool
    {
        return $this->type->isInformal();
    }

    public function father(): CompanyFatherId
    {
        return $this->fatherId;
    }

    public function logoData(): array
    {
        return $this->logo->data();
    }

    public function setCostCenter(array $centerCosts): void
    {
        array_map(function (CompanyCostCenter $centerCost) {
            $this->costCenters->add($centerCost);
        }, $centerCosts);
    }

    public function setUsers(array $users): void
    {
        array_map(function (CompanyUser $user) {
            $this->users->add($user);
        }, $users);
    }

    private function setBankAccount(array $bankAccount): void
    {
        array_map(function (CompanyBankAccount $bankAccount) {
            $this->bankAccounts->add($bankAccount);
        }, $bankAccount);
    }

    private function users(): array
    {
        return array_map(function (CompanyUser $user) {
            return $user->toArray();
        }, $this->users->toArray());
    }

    private function costCenters(): array
    {
        return array_map(function (CompanyCostCenter $costCenter) {
            return $costCenter->toArray();
        }, $this->costCenters->toArray());
    }

    private function bankAccounts()
    {
        return array_map(function (CompanyBankAccount $bankAccount) {
            return $bankAccount->number();
        }, $this->bankAccounts->toArray());
    }

    public function bankAccount(): CompanyBankAccount
    {
        return $this->bankAccounts->last();
    }

    public function folio(): string
    {
        return $this->folio->value();
    }

    public function updateActive(bool $active, string $userId): void
    {
        $this->active = $this->active->update($active);
        $this->updatedByUser = $this->updatedByUser->update($userId);
        $this->updateDate = $this->updateDate->todayDate();
        $this->record(new CommerceUpdatedDomainEvent($this->id(), $this->toArray()));
    }

    public function hasCostCenter(string $costCenterId): bool
    {
        $costCenters = array_filter($this->costCenters->toArray(), function (CompanyCostCenter $costCenter) use ($costCenterId) {
            return $costCenter->isSame($costCenterId);
        });

        return !empty($costCenters);
    }

    public function toArray(): array
    {

        return [
            'id' => $this->id->value(),
            'folio' => $this->folio->value(),
            'fatherId' => $this->fatherId->value(),
            'legalRepresentative' => $this->legalRepresentative->value(),
            'fiscalPersonType' => $this->fiscalPersonType->value(),
            'fiscalName' => $this->fiscalName->value(),
            'tradeName' => $this->tradeName->value(),
            'rfc' => $this->rfc->value(),
            'postalAddress' => $this->postalAddress->value(),
            'phoneNumbers' => $this->phoneNumbers->value(),
            'logo' => $this->logo->value(),
            'slug' => $this->slug->value(),
            'balance' => $this->balance->value(),
            'bankAccounts' => $this->bankAccounts(),
            'publicTerminal' => $this->publicTerminal->value(),
            'employees' => $this->employees->value(),
            'branchOffices' => $this->branchOffices->value(),
            'costCenters' => $this->costCenters(),
            'users' => $this->users(),
            'pointSaleTerminal' => $this->pointSaleTerminal->value(),
            'paymentApi' => $this->paymentApi->value(),
            'type' => $this->type->value(),
            'allowTransactions' => $this->allowTransactions->value(),
            'statusId' => $this->statusId->value(),
            'stpAccountId' => $this->stpAccountId->value(),
            'registerStep' => $this->registerStep->value(),
            'updatedByUser' => $this->updatedByUser->value(),
            'updateDate' => $this->updateDate->value(),
            'createByUser' => $this->createdByUser->value(),
            'register' => $this->register->value(),
            'active' => $this->active->value()
        ];
    }

}