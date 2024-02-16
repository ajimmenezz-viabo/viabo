<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\shared\domain\bus\command\Command;

final readonly class AddUserToCompanyCommand implements Command
{
    public function __construct(public string $companyId, public array $users)
    {
    }
}