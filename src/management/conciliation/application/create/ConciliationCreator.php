<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\management\conciliation\domain\Conciliation;
use Viabo\management\conciliation\domain\ConciliationAmount;
use Viabo\management\conciliation\domain\ConciliationEmails;
use Viabo\management\conciliation\domain\ConciliationReferencePayCash;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\conciliation\domain\ConciliationSpei;
use Viabo\management\conciliation\domain\exceptions\ConciliationTypeChargeNotDefine;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\paymentCash\PaymentCashAdapter;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class ConciliationCreator
{
    public function __construct(
        private ConciliationRepository $repository ,
        private PaymentCashAdapter     $adapter ,
        private EventBus               $bus)
    {
    }

    public function __invoke(
        CardId                       $cardId ,
        ConciliationAmount           $amount ,
        ConciliationSpei             $spei ,
        ConciliationEmails           $emails ,
        ConciliationReferencePayCash $referencePayCash ,
        string                       $cardNumber ,
        array                        $apiData
    ): ConciliationResponse
    {
        $conciliation = Conciliation::create($cardId , $amount , $spei , $emails , $referencePayCash);

        if ($conciliation->isNotTypeCharge()) {
            throw new ConciliationTypeChargeNotDefine();
        }

        if ($conciliation->isDefineTypeChargePayCash()) {
            $conciliation->setCardNumber($cardNumber);
            $reference = $this->adapter->reference($conciliation , $apiData);
            $conciliation->updateReferencePayCash($reference);
        }

        $this->repository->save($conciliation);

        $conciliation->setEventCreated();
        $this->bus->publish(...$conciliation->pullDomainEvents());

        return new ConciliationResponse(['referenceNumber' => $conciliation->referenceNumber()->value()]);
    }

}