<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateDepositCommand implements Command
{
    public function __construct(public ?array $depositData)
    {
    }
}