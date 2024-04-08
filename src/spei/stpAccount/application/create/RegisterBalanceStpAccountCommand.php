<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class RegisterBalanceStpAccountCommand implements Command
{
    public function __construct(public string $company)
    {
    }
}