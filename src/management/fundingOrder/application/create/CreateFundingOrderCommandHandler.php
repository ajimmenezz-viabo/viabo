<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\application\create;


use Viabo\management\fundingOrder\domain\FundingOrderAmount;
use Viabo\management\fundingOrder\domain\FundingOrderEmails;
use Viabo\management\fundingOrder\domain\FundingOrderReferencePayCash;
use Viabo\management\fundingOrder\domain\FundingOrderSpei;
use Viabo\management\fundingOrder\domain\PayCashData;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CreateFundingOrderCommandHandler implements QueryHandler
{
    public function __construct(private FundingOrderCreator $creator)
    {
    }

    public function __invoke(CreateFundingOrderCommand $command): Response
    {
        $cardId = CardId::create($command->cardId);
        $amount = FundingOrderAmount::create($command->amount);
        $emails = FundingOrderEmails::create($command->emails);
        $spei = new FundingOrderSpei($command->spei);
        $payCash = new FundingOrderReferencePayCash($command->payCashOption);
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