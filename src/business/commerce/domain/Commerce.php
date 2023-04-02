<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\business\commerce\domain\events\CommerceCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Commerce extends AggregateRoot
{
    public function __construct(
        private readonly CommerceId                  $id ,
        private readonly CommerceLegalRepresentative $legalRepresentative ,
        private readonly CommerceType                $type ,
        private readonly CommerceTaxName             $taxName ,
        private readonly CommerceTradeName           $tradeName ,
        private readonly CommerceRfc                 $rfc ,
        private readonly CommerceEmployees           $employees ,
        private readonly CommerceBranchOffices       $branchOffices ,
        private readonly CommercePointSaleTerminal   $pointSaleTerminal ,
        private readonly CommercePaymentApi          $paymentApi ,
        private readonly CommerceRegister            $register ,
        private readonly CommerceRegisterStep        $registerStep ,
        private readonly CommerceActive              $active
    )
    {
    }

    public static function create(
        CommerceLegalRepresentative $legalRepresentative , CommerceRegisterStep $registerStep
    ): self
    {
        $commerce = new self(
            CommerceId::create() ,
            $legalRepresentative ,
            new CommerceType('') ,
            new CommerceTaxName('') ,
            new CommerceTradeName('') ,
            new CommerceRfc('') ,
            new CommerceEmployees('0') ,
            new CommerceBranchOffices('0') ,
            new CommercePointSaleTerminal('0') ,
            new CommercePaymentApi('0') ,
            CommerceRegister::create() ,
            $registerStep ,
            new CommerceActive('1') ,
        );

        $commerce->record(new CommerceCreatedDomainEvent(
            $commerce->legalRepresentative->value() , $commerce->id->value() , $commerce->toArray()
        ));

        return $commerce;
    }

    public function toArray(): array
    {
        return [
            'legalRepresentative' => $this->legalRepresentative->value() ,
            'type' => $this->type->value() ,
            'taxName' => $this->taxName->value() ,
            'tradeName' => $this->tradeName->value() ,
            'rfc' => $this->rfc->value() ,
            'employees' => $this->employees->value() ,
            'branchOffices' => $this->branchOffices->value() ,
            'pointSaleTerminal' => $this->pointSaleTerminal->value() ,
            'paymentApi' => $this->paymentApi->value() ,
            'register' => $this->register->value() ,
            'registerStep' => $this->registerStep->value() ,
            'active' => $this->active->value()
        ];
    }

}