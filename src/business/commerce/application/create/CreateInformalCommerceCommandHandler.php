<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


use Viabo\business\commerce\domain\CommerceTradeName;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateInformalCommerceCommandHandler implements CommandHandler
{
    public function __construct(private InformalCommerceCreator $creator)
    {
    }

    public function __invoke(CreateInformalCommerceCommand $command): void
    {
        $commerceTradeName = CommerceTradeName::create($command->tradeName);

        $this->creator->__invoke($commerceTradeName);
    }
}