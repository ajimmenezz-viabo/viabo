<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\shared\domain\bus\command\Command;

final readonly class UpdateCompanyCommandByRegister implements Command
{
    public function __construct(
        public string $companyId,
        public string $fiscalPersonType,
        public string $fiscalName,
        public string $tradeName,
        public string $rfc,
        public string $employees,
        public string $branchOffices,
        public string $pointSaleTerminal,
        public string $paymentApi,
        public string $registerStep,
        public array $services
    )
    {
    }

}