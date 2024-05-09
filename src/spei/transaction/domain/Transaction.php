<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\URL;
use Viabo\spei\transaction\domain\events\InternalSpeiInTransactionCreatedDomainEvent;
use Viabo\spei\transaction\domain\events\StpTransactionCreatedDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiInDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiOutNotRegisteredDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionUpdatedBySpeiOutDomainEvent;

final class Transaction extends AggregateRoot
{

    private array $additionalData;

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
        private TransactionCommissions         $commissions,
        private TransactionLiquidationDate     $liquidationDate,
        private TransactionUrlCEP              $urlCEP,
        private TransactionStpId               $stpId,
        private TransactionApiData             $apiData,
        private TransactionCreatedByUser       $createdByUser,
        private TransactionCreateDate          $createDate,
        private TransactionActive              $active
    )
    {
        $this->additionalData = [];
    }

    public static function create(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        if ($value['additionalData']['isInternalTransaction']) {
            $trackingKey = TransactionTrackingKey::empty();
            $commissions = TransactionCommissions::fromInternal(
                $value['commissions'],
                $value['amount'],
                $value['sourceAccountType'] ?? '',
                $value['destinationAccountType'] ?? ''
            );
            $liquidationDate = TransactionLiquidationDate::todayDate();
            $bankCode = TransactionDestinationBankCode::empty();
            $active = TransactionActive::disable();
        } else {
            $commissions = TransactionCommissions::fromExternal($value['commissions'], $value['amount']);
            $liquidationDate = TransactionLiquidationDate::empty();
            $active = TransactionActive::enable();
            $bankCode = TransactionDestinationBankCode::create($value['bankCode']);
            $trackingKey = TransactionTrackingKey::create($value['sourceAcronym']);
        }

        $id = empty($value['transactionId']) ? TransactionId::random() : new TransactionId($value['transactionId']);
        $transaction = new static(
            $id,
            $transactionType,
            $statusId,
            TransactionReference::random(),
            $trackingKey,
            TransactionConcept::create($value['concept']),
            TransactionSourceAccount::create($value['sourceAccount']),
            TransactionSourceName::create($value['sourceName']),
            TransactionSourceEmail::create($value['sourceEmail']),
            TransactionDestinationAccount::create($value['destinationAccount']),
            TransactionDestinationName::create($value['destinationName']),
            new TransactionDestinationEmail($value['destinationEmail']),
            $bankCode,
            TransactionAmount::create($value['amount']),
            $commissions,
            $liquidationDate,
            TransactionUrlCEP::empty(),
            TransactionStpId::empty(),
            TransactionApiData::empty(),
            new TransactionCreatedByUser($value['userId'] ?? $value['createdByUser']),
            TransactionCreateDate::todayDate(),
            $active
        );
        $transaction->setAdditionData($value['additionalData']);
        return $transaction;
    }

    public static function fromValues(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        $transaction = self::create($value, $transactionType, $statusId);
        $transaction->record(
            new StpTransactionCreatedDomainEvent($transaction->id(), $transaction->toArray())
        );
        return $transaction;
    }

    public static function fromInternalSpeiIn(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        $transaction = self::create($value, $transactionType, $statusId);
        $transaction->incrementReference();
        $transaction->setCommissionsEmpty();
        $transaction->record(
            new InternalSpeiInTransactionCreatedDomainEvent($transaction->id(), $transaction->toArray())
        );
        return $transaction;
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
            TransactionCommissions::fromSpeiIn($value['commissions'], $value['monto']),
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
            TransactionCommissions::empty(),
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

    public function id(): string
    {
        return $this->id->value();
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

    public function incrementReference(): void
    {
        $this->reference = $this->reference->increment();
    }

    public function setCommissionsEmpty(): void
    {
        $this->commissions = TransactionCommissions::empty();
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

    public function isSameStpIdAndIsLiquidated(int|string $stpId, string $stpState): bool
    {
        $liquidated = 'LQ';
        $transactionLiquidated = 'TLQ';
        return $this->stpId->isSame($stpId) && ($stpState === $liquidated || $stpState === $transactionLiquidated);
    }

    public function isSpeiIn(): bool
    {
        return $this->typeId->isSpeiInType();
    }

    public function isSpeiOut(): bool
    {
        return $this->typeId->isSpeiOutType();
    }

    private function setAdditionData(array $additionalData): void
    {
        $this->additionalData = $additionalData;
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
            'commissions' => $this->commissions->format($this->amount->value()),
            'liquidationDate' => $this->liquidationDate->format(),
            'urlCEP' => $this->urlCEP->value(),
            'stpId' => $this->stpId->value(),
            'apiData' => $this->apiData->value(),
            'createdByUser' => $this->createdByUser->value(),
            'createDate' => $this->createDate->value(),
            'active' => $this->active->value(),
            'additionalData' => $this->additionalData ?? []
        ];
    }
}