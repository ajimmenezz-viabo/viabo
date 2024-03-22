<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\URL;
use Viabo\spei\transaction\domain\events\ExternalTransactionCreatedDomainEvent;
use Viabo\spei\transaction\domain\events\InternalSpeiInTransactionCreatedDomainEvent;
use Viabo\spei\transaction\domain\events\InternalSpeiOutTransactionCreatedDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiInDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiOutNotRegisteredDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionUpdatedBySpeiOutDomainEvent;

final class Transaction extends AggregateRoot
{

    public function __construct(
        private TransactionId                  $id,
        private TransactionTypeId              $typeId,
        private TransactionStatusId            $statusId,
        private TransactionReference           $reference,
        private TransactionTrackingKey         $trackingKey,
        private TransactionConcept             $concept,
        private TransactionSourceAccount       $sourceAccount,
        private TransactionSourceName          $sourceName,
        private TransactionSourceEmail         $sourceEmail,
        private TransactionDestinationAccount  $destinationAccount,
        private TransactionDestinationName     $destinationName,
        private TransactionDestinationEmail    $destinationEmail,
        private TransactionDestinationBankCode $destinationBankCode,
        private TransactionAmount              $amount,
        private TransactionLiquidationDate     $liquidationDate,
        private TransactionUrlCEP              $urlCEP,
        private TransactionStpId               $stpId,
        private TransactionApiData             $apiData,
        private TransactionCreatedByUser       $createdByUser,
        private TransactionCreateDate          $createDate,
        private TransactionActive              $active
    )
    {
    }

    public static function fromSpeiIn(
        array               $value,
        TransactionTypeId   $transactionInType,
        TransactionStatusId $liquidatedStatus
    ): static
    {
        $transaction = new static(
            TransactionId::random(),
            $transactionInType,
            $liquidatedStatus,
            TransactionReference::random(),
            TransactionTrackingKey::create($value['claveRastreo']),
            TransactionConcept::create($value['conceptoPago']),
            TransactionSourceAccount::create($value['cuentaOrdenante']),
            TransactionSourceName::create($value['nombreOrdenante']),
            TransactionSourceEmail::empty(),
            TransactionDestinationAccount::create($value['cuentaBeneficiario']),
            TransactionDestinationName::create($value['nombreBeneficiario']),
            TransactionDestinationEmail::empty(),
            TransactionDestinationBankCode::create($value['institucionOrdenante']),
            TransactionAmount::create($value['monto']),
            TransactionLiquidationDate::createByTimestamp($value['tsLiquidacion']),
            TransactionUrlCEP::empty(),
            TransactionStpId::create($value['id']),
            TransactionApiData::create($value),
            TransactionCreatedByUser::empty(),
            TransactionCreateDate::todayDate(),
            TransactionActive::disable()
        );
        $transactionData = $transaction->toArray();
        $transactionData['isSpeiIn'] = true;
        $transactionData['isSpeiOutUpdated'] = false;
        $transactionData['isSpeiOutNotRegistered'] = false;
        $transaction->record(new TransactionCreatedBySpeiInDomainEvent(
            $transaction->id(),
            $transactionData
        ));

        return $transaction;
    }

    public static function fromSpeiOutNotRegistered(
        array               $value,
        TransactionTypeId   $outType,
        TransactionStatusId $liquidatedStatus
    ): static
    {
        $transaction = new static(
            TransactionId::random(),
            $outType,
            $liquidatedStatus,
            TransactionReference::random(),
            TransactionTrackingKey::create($value['claveRastreo']),
            TransactionConcept::create($value['conceptoPago']),
            TransactionSourceAccount::create($value['cuentaOrdenante']),
            TransactionSourceName::create($value['nombreOrdenante']),
            TransactionSourceEmail::empty(),
            TransactionDestinationAccount::create($value['cuentaBeneficiario']),
            TransactionDestinationName::create($value['nombreBeneficiario']),
            TransactionDestinationEmail::empty(),
            TransactionDestinationBankCode::create($value['institucionOperante']),
            TransactionAmount::create($value['monto']),
            TransactionLiquidationDate::createByTimestamp($value['tsLiquidacion']),
            TransactionUrlCEP::create($value['urlCEP']),
            TransactionStpId::create($value['idEF']),
            TransactionApiData::create($value),
            TransactionCreatedByUser::empty(),
            TransactionCreateDate::todayDate(),
            TransactionActive::disable()
        );
        $transactionData = $transaction->toArray();
        $transactionData['isSpeiOutNotRegistered'] = true;
        $transactionData['isSpeiOutUpdated'] = false;
        $transactionData['isSpeiIn'] = false;
        $transaction->record(new TransactionCreatedBySpeiOutNotRegisteredDomainEvent(
            $transaction->id(),
            $transactionData
        ));

        return $transaction;
    }

    public static function fromInternalSpeiOut(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        $transaction = new static(
            new TransactionId($value['transactionId']),
            $transactionType,
            $statusId,
            TransactionReference::random(),
            TransactionTrackingKey::empty(),
            TransactionConcept::create($value['concept']),
            TransactionSourceAccount::create($value['sourceAccount']),
            TransactionSourceName::create($value['sourceName']),
            TransactionSourceEmail::create($value['sourceEmail']),
            TransactionDestinationAccount::create($value['destinationAccount']),
            TransactionDestinationName::create($value['destinationName']),
            new TransactionDestinationEmail($value['destinationEmail']),
            TransactionDestinationBankCode::empty(),
            TransactionAmount::create($value['amount']),
            TransactionLiquidationDate::todayDate(),
            TransactionUrlCEP::empty(),
            TransactionStpId::empty(),
            TransactionApiData::empty(),
            new TransactionCreatedByUser($value['userId']),
            TransactionCreateDate::todayDate(),
            TransactionActive::disable()
        );
        $transaction->record(
            new InternalSpeiOutTransactionCreatedDomainEvent($transaction->id(), $transaction->toArray())
        );
        return $transaction;
    }

    public static function fromExternalSpeiOut(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        return new static(
            new TransactionId($value['transactionId']),
            $transactionType,
            $statusId,
            TransactionReference::random(),
            TransactionTrackingKey::create($value['sourceAcronym']),
            TransactionConcept::create($value['concept']),
            TransactionSourceAccount::create($value['sourceAccount']),
            TransactionSourceName::create($value['sourceName']),
            TransactionSourceEmail::create($value['sourceEmail']),
            TransactionDestinationAccount::create($value['destinationAccount']),
            TransactionDestinationName::create($value['destinationName']),
            new TransactionDestinationEmail($value['destinationEmail']),
            TransactionDestinationBankCode::create($value['bankCode']),
            TransactionAmount::create($value['amount']),
            TransactionLiquidationDate::empty(),
            TransactionUrlCEP::empty(),
            TransactionStpId::empty(),
            TransactionApiData::empty(),
            new TransactionCreatedByUser($value['userId']),
            TransactionCreateDate::todayDate(),
            TransactionActive::enable()
        );
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public static function fromInternalSpeiIn(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        $transaction = new static(
            TransactionId::random(),
            $transactionType,
            $statusId,
            TransactionReference::fromIncrement($value['reference']),
            TransactionTrackingKey::empty(),
            TransactionConcept::create($value['concept']),
            TransactionSourceAccount::create($value['sourceAccount']),
            TransactionSourceName::create($value['sourceName']),
            TransactionSourceEmail::create($value['sourceEmail']),
            TransactionDestinationAccount::create($value['destinationAccount']),
            TransactionDestinationName::create($value['destinationName']),
            new TransactionDestinationEmail($value['destinationEmail']),
            TransactionDestinationBankCode::empty(),
            TransactionAmount::create($value['amount']),
            TransactionLiquidationDate::todayDate(),
            TransactionUrlCEP::empty(),
            TransactionStpId::empty(),
            TransactionApiData::empty(),
            new TransactionCreatedByUser($value['createdByUser']),
            TransactionCreateDate::todayDate(),
            TransactionActive::disable()
        );
        $transaction->record(
            new InternalSpeiInTransactionCreatedDomainEvent($transaction->id(), $transaction->toArray())
        );
        return $transaction;
    }

    public function amount(): float
    {
        return $this->amount->value();
    }

    public function destinationName(): string
    {
        return $this->destinationName->value();
    }

    public function url(): string
    {
        return URL::get() . "/spei/transaccion/" . $this->id();
    }

    public function updateStpData(array $stpData): void
    {
        $this->stpId = $this->stpId->update($stpData['resultado']['id']);
    }

    public function updateToLiquidated(array $stpData, TransactionStatusId $statusId): void
    {
        $this->apiData = $this->apiData->update($stpData);
        $this->statusId = $statusId;
        $this->liquidationDate = $this->liquidationDate->update($stpData['tsLiquidacion']);
        $this->urlCEP = $this->urlCEP->update($stpData['urlCEP']);
        $this->active = $this->active->disable();
        $transaction = $this->toArray();
        $transaction['isSpeiOutUpdated'] = true;
        $transaction['isSpeiIn'] = false;
        $transaction['isSpeiOutNotRegistered'] = false;
        $this->record(new TransactionUpdatedBySpeiOutDomainEvent($this->id(), $transaction));
    }

    public function eventExternalTransactionCreated(): void
    {
        $this->record(new ExternalTransactionCreatedDomainEvent($this->id(), $this->toArray()));
    }

    public function isSameStpIdAndIsLiquidated(int|string $stpId, string $stpState): bool
    {
        $liquidated = 'LQ';
        return $this->stpId->isSame($stpId) && $stpState === $liquidated;
    }

    public function isSpeiIn(): bool
    {
        return $this->typeId->isSpeiInType();
    }

    public function isSpeiOut(): bool
    {
        return $this->typeId->isSpeiOutType();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'typeId' => $this->typeId->id(),
            'typeName' => $this->typeId->name(),
            'statusId' => $this->statusId->id(),
            'statusName' => $this->statusId->name(),
            'reference' => $this->reference->value(),
            'trackingKey' => $this->trackingKey->value(),
            'concept' => $this->concept->value(),
            'sourceAccount' => $this->sourceAccount->value(),
            'sourceName' => $this->sourceName->value(),
            'sourceEmail' => $this->sourceEmail->value(),
            'destinationAccount' => $this->destinationAccount->value(),
            'destinationName' => $this->destinationName->value(),
            'destinationEmail' => $this->destinationEmail->value(),
            'destinationBankCode' => $this->destinationBankCode->value(),
            'amount' => $this->amount->value(),
            'amountMoneyFormat' => $this->amount->moneyFormat(),
            'liquidationDate' => $this->liquidationDate->format(),
            'urlCEP' => $this->urlCEP->value(),
            'stpId' => $this->stpId->value(),
            'apiData' => $this->apiData->value(),
            'createdByUser' => $this->createdByUser->value(),
            'createDate' => $this->createDate->value(),
            'active' => $this->active->value()
        ];
    }
}