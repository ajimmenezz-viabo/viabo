<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\application\transactions;


use Viabo\management\cardOperation\domain\CardOperationEmails;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\credential\CardCredentialClientKey;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CardTransactionCommandHandler implements CommandHandler
{
    public function __construct(private CardTransactionsProcessor $processor)
    {
    }

    public function __invoke(CardTransactionCommand $command): void
    {
        $originCardId = new CardId($command->cardId);
        $clientKey = new CardCredentialClientKey($command->cardCredential['clientKey']);
        $emails = new CardOperationEmails($command->legalRepresentativeEmail);

        ($this->processor)($originCardId , $clientKey , $emails , $command->destinationCards);
    }
}