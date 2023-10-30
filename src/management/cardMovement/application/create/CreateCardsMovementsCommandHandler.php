<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCardsMovementsCommandHandler implements CommandHandler
{
    public function __construct(private CardsMovementsCreator $creator)
    {
    }

    public function __invoke(CreateCardsMovementsCommand $command): void
    {
        $this->creator->__invoke($command->receiptId , $this->toArray($command->movements));
    }

    private function toArray(string $cardsMovements): mixed
    {
        return empty($cardsMovements) ? [] : json_decode($cardsMovements , true);
    }
}