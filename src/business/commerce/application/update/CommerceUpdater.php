<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\update;


use Viabo\business\commerce\domain\CommerceBranchOffices;
use Viabo\business\commerce\domain\CommerceEmployees;
use Viabo\business\commerce\domain\CommerceFiscalPersonType;
use Viabo\business\commerce\domain\CommercePaymentApi;
use Viabo\business\commerce\domain\CommercePointSaleTerminal;
use Viabo\business\commerce\domain\CommerceRegisterStep;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceRfc;
use Viabo\business\commerce\domain\CommerceTaxName;
use Viabo\business\commerce\domain\CommerceTradeName;
use Viabo\business\commerce\domain\services\CommerceFinder;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommerceUpdater
{

    public function __construct(
        private CommerceRepository $repository ,
        private CommerceFinder     $commerceFinder ,
        private EventBus           $bus

    )
    {
    }

    public function __invoke(
        CommerceLegalRepresentative $legalRepresentative ,
        CommerceId                  $commerceId ,
        CommerceFiscalPersonType    $fiscalPersonType ,
        CommerceTaxName             $taxName ,
        CommerceTradeName           $tradeName ,
        CommerceRfc                 $rfc ,
        CommerceEmployees           $employees ,
        CommerceBranchOffices       $branchOffices ,
        CommercePointSaleTerminal   $pointSaleTerminal ,
        CommercePaymentApi          $paymentApi ,
        CommerceRegisterStep        $registerStep
    ): void
    {
        $commerce = $this->commerceFinder->finder($commerceId);
        $commerce->update(
            $legalRepresentative ,
            $fiscalPersonType ,
            $taxName ,
            $tradeName ,
            $rfc ,
            $employees ,
            $branchOffices ,
            $pointSaleTerminal ,
            $paymentApi ,
            $registerStep
        );

        $this->repository->update($commerce);

        $this->bus->publish(...$commerce->pullDomainEvents());
    }

}