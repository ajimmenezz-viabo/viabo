<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\update;


use Viabo\business\commerce\domain\CommerceBranchOffices;
use Viabo\business\commerce\domain\CommerceEmployees;
use Viabo\business\commerce\domain\CommerceFiscalPersonType;
use Viabo\business\commerce\domain\CommercePaymentApi;
use Viabo\business\commerce\domain\CommercePointSaleTerminal;
use Viabo\business\commerce\domain\CommerceRegisterStep;
use Viabo\business\commerce\domain\CommerceRfc;
use Viabo\business\commerce\domain\CommerceTaxName;
use Viabo\business\commerce\domain\CommerceTradeName;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class UpdateCommerceCommandHandler implements CommandHandler
{
    public function __construct(private CommerceUpdater $updater)
    {
    }

    public function __invoke(UpdateCommerceCommand $command): void
    {
        $legalRepresentative = new CommerceLegalRepresentative($command->legalRepresentative);
        $commerceId = new CommerceId($command->commerceId);
        $fiscalPersonType = new CommerceFiscalPersonType($command->fiscalPersonType);
        $taxName = new CommerceTaxName($command->taxName);
        $tradeName = new CommerceTradeName($command->tradeName);
        $rfc = new CommerceRfc($command->rfc);
        $employees = CommerceEmployees::create($command->employees);
        $branchOffices = CommerceBranchOffices::create($command->branchOffices);
        $pointSaleTerminal = CommercePointSaleTerminal::create($command->pointSaleTerminal);
        $paymentApi = CommercePaymentApi::create($command->paymentApi);
        $registerStep = new CommerceRegisterStep($command->registerStep);

        ($this->updater)(
            $legalRepresentative ,
            $commerceId ,
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
    }
}