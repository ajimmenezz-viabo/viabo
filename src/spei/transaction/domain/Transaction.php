<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\URL;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiInDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedDomainEvent;

final class Transaction extends AggregateRoot
{
    private array $sptKeys;

    public function __construct(
        private TransactionId                  $id,
        private TransactionTypeId              $typeId,
        private TransactionStatusId            $statusId,
        private TransactionReference           $reference,
        private TransactionTrackingKey         $trackingKey,
        private TransactionConcept             $concept,
        private TransactionSourceAccount       $sourceAccount,
        private TransactionSourceName          $sourceName,
        private TransactionDestinationAccount  $destinationAccount,
        private TransactionDestinationName     $destinationName,
        private TransactionDestinationEmail    $destinationEmail,
        private TransactionDestinationBankCode $destinationBankCode,
        private TransactionAmount              $amount,
        private TransactionLiquidationDate     $liquidationDate,
        private TransactionStpId               $stpId,
        private TransactionApiData             $apiData,
        private TransactionCreatedByUser       $createdByUser,
        private TransactionCreateDate          $createDate,
        private TransactionActive              $active
    )
    {
        $this->sptKeys = ['key' => '', 'url' => ''];
    }

    public static function create(
        string $transactionId,
        string $concept,
        string $sourceAccount,
        string $sourceAcronym,
        string $sourceName,
        string $destinationAccount,
        string $destinationName,
        string $destinationEmail,
        string $destinationBankCode,
        float  $amount,
        string $userId
    ): static
    {
        return new static(
            new TransactionId($transactionId),
            TransactionTypeId::out(),
            TransactionStatusId::transitionLiquidation(),
            TransactionReference::random(),
            TransactionTrackingKey::create($sourceAcronym),
            TransactionConcept::create($concept),
            TransactionSourceAccount::create($sourceAccount),
            TransactionSourceName::create($sourceName),
            TransactionDestinationAccount::create($destinationAccount),
            TransactionDestinationName::create($destinationName),
            new TransactionDestinationEmail($destinationEmail),
            TransactionDestinationBankCode::create($destinationBankCode),
            TransactionAmount::create($amount),
            TransactionLiquidationDate::empty(),
            TransactionStpId::empty(),
            TransactionApiData::empty(),
            new TransactionCreatedByUser($userId),
            TransactionCreateDate::todayDate(),
            TransactionActive::enable(),
        );
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
            TransactionDestinationAccount::create($value['cuentaBeneficiario']),
            TransactionDestinationName::create($value['nombreBeneficiario']),
            TransactionDestinationEmail::empty(),
            TransactionDestinationBankCode::create($value['institucionOrdenante']),
            TransactionAmount::create($value['monto']),
            TransactionLiquidationDate::createByTimestamp($value['tsLiquidacion']),
            TransactionStpId::create($value['id']),
            TransactionApiData::create($value),
            TransactionCreatedByUser::empty(),
            TransactionCreateDate::todayDate(),
            TransactionActive::disable()
        );
        $transaction->record(new TransactionCreatedBySpeiInDomainEvent(
            $transaction->id(),
            $transaction->toArray()
        ));

        return $transaction;
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function setStpKeys(string $key, string $url): void
    {
        $this->sptKeys['key'] = $key;
        $this->sptKeys['url'] = $url;
    }

    public function stpKeys(): array
    {
        return $this->sptKeys;
    }

    public function url(): string
    {
        return URL::get() . "/spei/transaccion/" . $this->id();
    }

    public function updateStpId(string $stpId): void
    {
        $this->stpId = $this->stpId->update($stpId);
    }

    public function eventCreated(): void
    {
        $this->record(new TransactionCreatedDomainEvent($this->id(), $this->toArray()));
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
            'destinationAccount' => $this->destinationAccount->value(),
            'destinationName' => $this->destinationName->value(),
            'destinationEmail' => $this->destinationEmail->value(),
            'destinationBankCode' => $this->destinationBankCode->value(),
            'amount' => $this->amount->value(),
            'amountMoneyFormat' => $this->amount->moneyFormat(),
            'liquidationDate' => $this->liquidationDate->value(),
            'stpId' => $this->stpId->value(),
            'apiData' => $this->apiData->value(),
            'createdByUser' => $this->createdByUser->value(),
            'createDate' => $this->createDate->value(),
            'active' => $this->active->value()
        ];
    }
}