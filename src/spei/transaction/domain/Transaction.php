<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\URL;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiInDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiOutNotRegisteredDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionCreatedDomainEvent;
use Viabo\spei\transaction\domain\events\TransactionUpdatedBySpeiOutDomainEvent;

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
        private TransactionUrlCEP              $urlCEP,
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
        TransactionTypeId   $outType,
        TransactionStatusId $inTransitStatus,
        string              $transactionId,
        string              $concept,
        string              $sourceAccount,
        string              $sourceAcronym,
        string              $sourceName,
        string              $destinationAccount,
        string              $destinationName,
        string              $destinationEmail,
        string              $destinationBankCode,
        float               $amount,
        string              $userId
    ): static
    {
        return new static(
            new TransactionId($transactionId),
            $outType,
            $inTransitStatus,
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
            TransactionUrlCEP::empty(),
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

    public function id(): string
    {
        return $this->id->value();
    }

    public function amount(): float
    {
        return $this->amount->value();
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

    public function eventCreated(): void
    {
        $this->record(new TransactionCreatedDomainEvent($this->id(), $this->toArray()));
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