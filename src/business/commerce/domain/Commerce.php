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
        private CommerceTaxName             $taxName ,
        private CommerceTradeName           $tradeName ,
        private CommerceRfc                 $rfc ,
        private CommerceEmployees           $employees ,
        private CommerceBranchOffices       $branchOffices ,
        private CommercePointSaleTerminal   $pointSaleTerminal ,
        private CommercePaymentApi          $paymentApi ,
        private CommerceRegister            $register ,
        private CommerceType                $type ,
        private CommerceAllowTransactions   $allowTransactions ,
        private CommerceStatusId            $statusId ,
        private CommerceRegisterStep        $registerStep ,
        private CommerceActive              $active
    )
    {
    }

    public static function create(
        CommerceLegalRepresentative $legalRepresentative , CommerceRegisterStep $registerStep
    ): self
    {
        $commerce = new self(
            CommerceId::create() ,
            new CommerceFatherId('') ,
            $legalRepresentative ,
            new CommerceFiscalPersonType('') ,
            new CommerceTaxName('') ,
            new CommerceTradeName('') ,
            new CommerceRfc('') ,
            new CommerceEmployees('0') ,
            new CommerceBranchOffices('0') ,
            new CommercePointSaleTerminal('0') ,
            new CommercePaymentApi('0') ,
            CommerceRegister::todayDate() ,
            new CommerceType('1') ,
            new CommerceAllowTransactions('1') ,
            new CommerceStatusId('1') ,
            $registerStep ,
            new CommerceActive('1') ,
        );

        $commerce->record(new CommerceCreatedDomainEvent($commerce->id->value() , $commerce->toArray()));

        return $commerce;
    }

    public function update(
        CommerceFiscalPersonType  $fiscalPersonType ,
        CommerceTaxName           $taxName ,
        CommerceTradeName         $tradeName ,
        CommerceRfc               $rfc ,
        CommerceEmployees         $employees ,
        CommerceBranchOffices     $branchOffices ,
        CommercePointSaleTerminal $pointSaleTerminal ,
        CommercePaymentApi        $paymentApi ,
        CommerceRegisterStep      $registerStep
    ): void
    {
        $this->fiscalPersonType = $fiscalPersonType;
        $this->taxName = $taxName;
        $this->tradeName = $tradeName;
        $this->rfc = $rfc;
        $this->employees = $employees;
        $this->branchOffices = $branchOffices;
        $this->pointSaleTerminal = $pointSaleTerminal;
        $this->paymentApi = $paymentApi;
        $this->registerStep = $this->registerStep->update($registerStep->value());
        $this->statusId = $this->statusId->update($registerStep->isLastStep());

        $this->record(new CommerceUpdatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'fatherId' => $this->fatherId->value() ,
            'legalRepresentative' => $this->legalRepresentative->value() ,
            'fiscalPersonType' => $this->fiscalPersonType->value() ,
            'taxName' => $this->taxName->value() ,
            'tradeName' => $this->tradeName->value() ,
            'rfc' => $this->rfc->value() ,
            'employees' => $this->employees->value() ,
            'branchOffices' => $this->branchOffices->value() ,
            'pointSaleTerminal' => $this->pointSaleTerminal->value() ,
            'paymentApi' => $this->paymentApi->value() ,
            'register' => $this->register->value() ,
            'type' => $this->type->value() ,
            'allowTransactions' => $this->allowTransactions->value() ,
            'statusId' => $this->statusId->value() ,
            'registerStep' => $this->registerStep->value() ,
            'active' => $this->active->value()
        ];
    }

}