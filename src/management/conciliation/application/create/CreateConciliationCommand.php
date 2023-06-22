<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateConciliationCommand implements Command
{
    public function __construct(
        public string $cardId ,
        public string $amount ,
        public string $spei ,
        public array  $emails
    )
    {
    }
}