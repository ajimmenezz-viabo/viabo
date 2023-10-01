<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\application\create;


use Viabo\management\fundingOrder\domain\FundingOrder;
use Viabo\management\fundingOrder\domain\FundingOrderAmount;
use Viabo\management\fundingOrder\domain\FundingOrderEmails;
use Viabo\management\fundingOrder\domain\FundingOrderReferencePayCash;
use Viabo\management\fundingOrder\domain\FundingOrderRepository;
use Viabo\management\fundingOrder\domain\FundingOrderSpei;
use Viabo\management\fundingOrder\domain\exceptions\FundingOrderTypeChargeNotDefine;
use Viabo\management\fundingOrder\domain\PayCashData;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\management\shared\domain\paymentCash\PaymentCashAdapter;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class FundingOrderCreator
{
    public function __construct(
        private FundingOrderRepository $repository ,
        private PaymentCashAdapter     $adapter ,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(
        CardId                       $cardId ,
        FundingOrderAmount           $amount ,
        FundingOrderSpei             $spei ,
        FundingOrderEmails           $emails ,
        FundingOrderReferencePayCash $referencePayCash ,
        CardNumber                   $cardNumber ,
        PayCashData                  $payCashData
    ): FundingOrderResponse
    {
        $fundingOrder = FundingOrder::create(
            $cardId ,
            $cardNumber ,
            $amount ,
            $spei ,
            $emails ,
            $referencePayCash ,
            $payCashData
        );

        if ($fundingOrder->isNotTypeCharge()) {
            throw new FundingOrderTypeChargeNotDefine();
        }

        if ($fundingOrder->isDefineTypeChargePayCash()) {
            $reference = $this->adapter->createReference($fundingOrder);
            $fundingOrder->updateReferencePayCash($reference);
            $referenceData = $this->adapter->searchReference($fundingOrder);
            $fundingOrder->setPayCashInstructionsUrl($referenceData);
        }

        $this->repository->save($fundingOrder);

        $fundingOrder->setEventCreated();
        $this->bus->publish(...$fundingOrder->pullDomainEvents());

        return new FundingOrderResponse(['referenceNumber' => $fundingOrder->referenceNumber()->value()]);
    }

}