<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\URL;
use Viabo\spei\transaction\domain\events\TransactionCreatedDomainEvent;

final class Transaction extends AggregateRoot
{
    private array $sptKeys;

    public function __construct(
        private TransactionId                 $id ,
        private TransactionType               $type ,
        private TransactionReference          $reference ,
        private TransactionTrackingKey        $trackingKey ,
        private TransactionConcept            $concept ,
        private TransactionSourceAccount      $sourceAccount ,
        private TransactionSourceName         $sourceName ,
        private TransactionDestinationAccount $destinationAccount ,
        private TransactionDestinationName    $destinationName ,
        private TransactionDestinationEmail   $destinationEmail ,
        private TransactionAmount             $amount ,
        private TransactionStatusId           $statusId ,
        private TransactionCreatedByUser      $createdByUser ,
        private TransactionCreateDate         $createDate ,
        private TransactionActive             $active
    )
    {
        $this->sptKeys = ['key' => '' , 'url' => ''];
    }

    public static function create(
        string $transactionId ,
        string $concept ,
        string $sourceAccount ,
        string $sourceName ,
        string $destinationAccount ,
        string $destinationName ,
        string $destinationEmail ,
        float  $amount ,
        string $userId
    ): static
    {
        $transaction = new static(
            new TransactionId($transactionId) ,
            TransactionType::out() ,
            TransactionReference::random() ,
            TransactionTrackingKey::create() ,
            TransactionConcept::create($concept) ,
            TransactionSourceAccount::create($sourceAccount) ,
            TransactionSourceName::create($sourceName) ,
            TransactionDestinationAccount::create($destinationAccount) ,
            TransactionDestinationName::create($destinationName) ,
            new TransactionDestinationEmail($destinationEmail) ,
            TransactionAmount::create($amount) ,
            TransactionStatusId::inProcess() ,
            new TransactionCreatedByUser($userId) ,
            TransactionCreateDate::todayDate() ,
            TransactionActive::enable() ,
        );

        $transaction->record(new TransactionCreatedDomainEvent($transaction->id() , $transaction->toArray()));
        return $transaction;
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function setStpKeys(string $key , string $url): void
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
        return URL::get() . "/spei/transaccion/" . $this->reference->value();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'type' => $this->type->value() ,
            'reference' => $this->reference->value() ,
            'trackingKey' => $this->trackingKey->value() ,
            'concept' => $this->concept->value() ,
            'sourceAccount' => $this->sourceAccount->value() ,
            'sourceName' => $this->sourceName->value() ,
            'destinationAccount' => $this->destinationAccount->value() ,
            'destinationName' => $this->destinationName->value() ,
            'destinationEmail' => $this->destinationEmail->value() ,
            'amount' => $this->amount->value() ,
            'amountMoneyFormat' => $this->amount->moneyFormat() ,
            'statusId' => $this->statusId->value() ,
            'createdByUser' => $this->createdByUser->value() ,
            'createDate' => $this->createDate->value() ,
            'active' => $this->active->value()
        ];
    }
}