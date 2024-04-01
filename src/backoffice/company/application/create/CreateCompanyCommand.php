<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateCompanyCommand implements Command
{
    public function __construct(
        public string $userId,
        public string $companyId,
        public string $fiscalName,
        public string $rfc,
        public string $commercialName,
        public array  $assignedUsers,
        public array  $costCenters,
        public array  $commissions
    )
    {
    }
}