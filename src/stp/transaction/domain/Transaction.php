<?php declare(strict_types=1);


namespace Viabo\stp\transaction\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\URL;
use Viabo\stp\transaction\domain\events\InternalSpeiInTransactionCreatedDomainEvent;
use Viabo\stp\transaction\domain\events\StpTransactionCreatedDomainEvent;
use Viabo\stp\transaction\domain\events\TransactionCreatedDomainEventBySpeiOutNotRegistered;
use Viabo\stp\transaction\domain\events\TransactionCreatedDomainEventByStp;
use Viabo\stp\transaction\domain\events\TransactionUpdatedDomainEventByStpSpeiOut;

final class Transaction extends AggregateRoot
{

    private array $additionalData;

    public function __construct(
        private TransactionId                  $id,
        private TransactionBusinessId          $businessId,
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

    public static function create(array $value): static
    {
        $transaction = new static(
            $value['transactionId'],
            TransactionBusinessId::create($value['businessId']),
            $value['transactionType'],
            $value['statusId'],
            $value['reference'] ?? TransactionReference::random(),
            $value['trackingKey'],
            TransactionConcept::create($value['concept']),
            TransactionSourceAccount::create($value['sourceAccount']),
            TransactionSourceName::create($value['sourceName']),
            TransactionSourceEmail::create($value['sourceEmail']),
            TransactionDestinationAccount::create($value['destinationAccount']),
            TransactionDestinationName::create($value['destinationName']),
            new TransactionDestinationEmail($value['destinationEmail']),
            $value['bankCode'],
            TransactionAmount::create($value['amount']),
            $value['commissions'],
            $value['liquidationDate'],
            $value['urlCEP'] ?? TransactionUrlCEP::empty(),
            $value['stpId'] ?? TransactionStpId::empty(),
            $value['api'] ?? TransactionApiData::empty(),
            new TransactionCreatedByUser($value['userId'] ?? $value['createdByUser']),
            TransactionCreateDate::todayDate(),
            $value['active']
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
        if ($value['additionalData']['isInternalTransaction']) {
            $value['trackingKey'] = TransactionTrackingKey::empty();
            $value['commissions'] = TransactionCommissions::fromInternal(
                $value['commissions'],
                $value['amount'],
                $value['sourceAccountType'] ?? '',
                $value['destinationAccountType'] ?? ''
            );
            $value['liquidationDate'] = TransactionLiquidationDate::todayDate();
            $value['bankCode'] = TransactionDestinationBankCode::empty();
            $value['active'] = TransactionActive::disable();
        } else {
            $value['trackingKey'] = TransactionTrackingKey::create($value['sourceAcronym']);
            $value['commissions'] = TransactionCommissions::fromExternal($value['commissions'], $value['amount']);
            $value['liquidationDate'] = TransactionLiquidationDate::empty();
            $value['bankCode'] = TransactionDestinationBankCode::create($value['bankCode']);
            $value['active'] = TransactionActive::enable();
        }
        $value['transactionType'] = $transactionType;
        $value['statusId'] = $statusId;
        $value['transactionId'] = new TransactionId($value['transactionId']);
        $value['urlCEP'] = TransactionUrlCEP::empty();
        $transaction = self::create($value);
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
        $value['transactionId'] = TransactionId::random();
        $value['reference'] = TransactionReference::fromIncrement($value['reference']);
        $value['trackingKey'] = TransactionTrackingKey::empty();
        $value['commissions'] = TransactionCommissions::empty();
        $value['liquidationDate'] = TransactionLiquidationDate::todayDate();
        $value['bankCode'] = TransactionDestinationBankCode::empty();
        $value['active'] = TransactionActive::disable();
        $value['transactionType'] = $transactionType;
        $value['statusId'] = $statusId;
        $transaction = self::create($value);
        $transaction->record(
            new InternalSpeiInTransactionCreatedDomainEvent($transaction->id(), $transaction->toArray())
        );
        return $transaction;
    }

    public static function fromSpt(
        array               $value,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        $commissions = empty($value['commissions']) ?
            TransactionCommissions::empty() :
            TransactionCommissions::fromSpeiIn($value['commissions'], $value['amount']);
        $value['transactionId'] = TransactionId::random();
        $value['transactionType'] = $transactionType;
        $value['statusId'] = $statusId;
        $value['reference'] = TransactionReference::random();
        $value['trackingKey'] = TransactionTrackingKey::create($value['sourceAcronym']);
        $value['commissions'] = $commissions;
        $value['liquidationDate'] = TransactionLiquidationDate::createByTimestamp($value['liquidationDate']);
        $value['urlCEP'] = TransactionUrlCEP::create($value['urlCEP']);
        $value['bankCode'] = TransactionDestinationBankCode::create($value['bankCode']);
        $value['stpId'] = TransactionStpId::create($value['stpId']);
        $value['api'] = TransactionApiData::create($value['api']);
        $value['active'] = TransactionActive::disable();
        $transaction = self::create($value);

        $transaction->record(new TransactionCreatedDomainEventByStp($transaction->id(), $transaction->toArray()));
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
        $this->record(new TransactionUpdatedDomainEventByStpSpeiOut($this->id(), $this->toArray()));
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

    public function setAdditionData(array $additionalData): void
    {
        $this->additionalData = $additionalData;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'businessId' => $this->businessId->value(),
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