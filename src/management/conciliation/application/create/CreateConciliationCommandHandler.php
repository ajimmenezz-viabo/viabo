<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\management\conciliation\domain\ConciliationAmount;
use Viabo\management\conciliation\domain\ConciliationEmails;
use Viabo\management\conciliation\domain\ConciliationReferencePayCash;
use Viabo\management\conciliation\domain\ConciliationSpei;
use Viabo\management\conciliation\domain\PayCashData;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CreateConciliationCommandHandler implements QueryHandler
{
    public function __construct(private ConciliationCreator $creator)
    {
    }

    public function __invoke(CreateConciliationCommand $command): Response
    {
        $cardId = CardId::create($command->cardId);
        $amount = ConciliationAmount::create($command->amount);
        $emails = ConciliationEmails::create($command->emails);
        $spei = new ConciliationSpei($command->spei);
        $payCash = new ConciliationReferencePayCash($command->payCashOption);
        $cardNumber = CardNumber::create($command->cardNumber);
        $payCashData = PayCashData::create($command->payCashData , $command->payCashInstructionsData);

        return $this->creator->__invoke(
            $cardId ,
            $amount ,
            $spei ,
            $emails ,
            $payCash ,
            $cardNumber ,
            $payCashData
        );
    }
}