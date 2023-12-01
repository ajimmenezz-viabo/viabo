<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\business\commerce\domain\events\CommerceCreatedDomainEvent;
use Viabo\business\commerce\domain\events\CommerceUpdatedDomainEvent;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Commerce extends AggregateRoot
{
    public function __construct(
        private CommerceId                  $id ,
        private CommerceFatherId            $fatherId ,
        private CommerceLegalRepresentative $legalRepresentative ,
        private CommerceFiscalPersonType    $fiscalPersonType ,
        private CommerceFiscalName          $fiscalName ,
        private CommerceTradeName           $tradeName ,
        private CommerceRfc                 $rfc ,
        private CommercePostalAddress       $postalAddress ,
        private CommercePhoneNumbers        $phoneNumbers ,
        private CommerceLogo                $logo ,
        private CommerceSlug                $slug ,
        private CommercePublicTerminal      $publicTerminal ,
        private CommerceEmployees           $employees ,
        private CommerceBranchOffices       $branchOffices ,
        private CommercePointSaleTerminal   $pointSaleTerminal ,
        private CommercePaymentApi          $paymentApi ,
        private CommerceType                $type ,
        private CommerceAllowTransactions   $allowTransactions ,
        private CommerceStatusId            $statusId ,
        private CommerceRegisterStep        $registerStep ,
        private CommerceUpdatedByUser       $updatedByUser ,
        private CommerceUpdateDate          $updateDate ,
        private CommerceRegister            $register ,
        private CommerceActive              $active
    )
    {
    }

    public static function create(string $legalRepresentative): self
    {
        $commerce = new self(
            CommerceId::random() ,
            new CommerceFatherId('') ,
            new CommerceLegalRepresentative($legalRepresentative) ,
            new CommerceFiscalPersonType('') ,
            new CommerceFiscalName('') ,
            new CommerceTradeName('') ,
            new CommerceRfc('') ,
            CommercePostalAddress::empty() ,
            CommercePhoneNumbers::empty() ,
            CommerceLogo::empty() ,
            CommerceSlug::empty() ,
            CommercePublicTerminal::empty() ,
            new CommerceEmployees('0') ,
            new CommerceBranchOffices('0') ,
            new CommercePointSaleTerminal('0') ,
            new CommercePaymentApi('0') ,
            new CommerceType('1') ,
            new CommerceAllowTransactions('1') ,
            new CommerceStatusId('1') ,
            CommerceRegisterStep::start() ,
            CommerceUpdatedByUser::empty() ,
            CommerceUpdateDate::empty() ,
            CommerceRegister::todayDate() ,
            new CommerceActive('1') ,
        );

        $commerce->record(new CommerceCreatedDomainEvent($commerce->id->value() , $commerce->toArray()));

        return $commerce;
    }

    public static function createInformal(CommerceTradeName $commerceTradeName): static
    {
        return new static(
            CommerceId::random() ,
            new CommerceFatherId('') ,
            CommerceLegalRepresentative::empty() ,
            new CommerceFiscalPersonType('') ,
            new CommerceFiscalName('') ,
            $commerceTradeName ,
            new CommerceRfc('') ,
            CommercePostalAddress::empty() ,
            CommercePhoneNumbers::empty() ,
            CommerceLogo::empty() ,
            CommerceSlug::empty() ,
            CommercePublicTerminal::empty() ,
            new CommerceEmployees('0') ,
            new CommerceBranchOffices('0') ,
            new CommercePointSaleTerminal('0') ,
            new CommercePaymentApi('0') ,
            new CommerceType('2') ,
            new CommerceAllowTransactions('0') ,
            new CommerceStatusId('3') ,
            new CommerceRegisterStep('4') ,
            CommerceUpdatedByUser::empty() ,
            CommerceUpdateDate::empty() ,
            CommerceRegister::todayDate() ,
            new CommerceActive('1') ,
        );
    }

    public function update(
        string $userId ,
        string $fiscalPersonType ,
        string $fiscalName ,
        string $tradeName ,
        string $rfc ,
        string $postalAddress ,
        string $phoneNumbers ,
        array  $logoData ,
        string $slug ,
        string $publicTerminal ,
        string $employees ,
        string $branchOffices ,
        string $pointSaleTerminal ,
        string $paymentApi ,
        string $registerStep
    ): void
    {
        $this->fiscalPersonType = $this->fiscalPersonType->update($fiscalPersonType);
        $this->fiscalName = $this->fiscalName->update($fiscalName);
        $this->tradeName = $this->tradeName->update($tradeName);
        $this->rfc = $this->rfc->update($rfc);
        $this->postalAddress = $this->postalAddress->update($postalAddress);
        $this->phoneNumbers = $this->phoneNumbers->update($phoneNumbers);
        $this->logo = $this->logo->update($logoData , $this->id());
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

        $this->record(new CommerceUpdatedDomainEvent($this->id->value() , $this->toArray()));
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

    public function father(): CommerceFatherId
    {
        return $this->fatherId;
    }

    public function logoData(): array
    {
        return $this->logo->data();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'fatherId' => $this->fatherId->value() ,
            'legalRepresentative' => $this->legalRepresentative->value() ,
            'fiscalPersonType' => $this->fiscalPersonType->value() ,
            'fiscalName' => $this->fiscalName->value() ,
            'tradeName' => $this->tradeName->value() ,
            'rfc' => $this->rfc->value() ,
            'postalAddress' => $this->postalAddress->value() ,
            'phoneNumbers' => $this->phoneNumbers->value() ,
            'logo' => $this->logo->value() ,
            'slug' => $this->slug->value() ,
            'publicTerminal' => $this->publicTerminal->value() ,
            'employees' => $this->employees->value() ,
            'branchOffices' => $this->branchOffices->value() ,
            'pointSaleTerminal' => $this->pointSaleTerminal->value() ,
            'paymentApi' => $this->paymentApi->value() ,
            'type' => $this->type->value() ,
            'allowTransactions' => $this->allowTransactions->value() ,
            'statusId' => $this->statusId->value() ,
            'registerStep' => $this->registerStep->value() ,
            'updatedByUser' => $this->updatedByUser->value() ,
            'updateDate' => $this->updateDate->value() ,
            'register' => $this->register->value() ,
            'active' => $this->active->value()
        ];
    }

}