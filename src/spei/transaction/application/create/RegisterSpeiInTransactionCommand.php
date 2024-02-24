<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class RegisterSpeiInTransactionCommand implements Command
{
    public function __construct(public int $date, public string $company)
    {
    }
}