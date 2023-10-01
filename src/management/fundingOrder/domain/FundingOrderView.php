<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\utils\NumberFormat;

final class FundingOrderView extends AggregateRoot
{


    public function __construct(
        private string $id ,
        private string $referenceNumber ,
        private string $statusId ,
        private string $statusName ,
        private string $conciliation ,
        private string $cardId ,
        private string $paymentProcessorName ,
        private string $cardNumber ,
        private string $amount ,
        private string $spei ,
        private string $referencePayCash ,
        private string $instructionsUrls ,
        private string $conciliationNumber ,
        private string $emails ,
        private string $registerDate ,
        private string $active ,
    )
    {
    }

    private function amountFormat(): string
    {
        return NumberFormat::money(floatval($this->amount));
    }

    private function instructionsUrlsToArray(): array
    {
        return empty($this->instructionsUrls) ? [] : json_decode($this->instructionsUrls , true);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'referenceNumber' => $this->referenceNumber ,
            'statusId' => $this->statusId ,
            'statusName' => $this->statusName ,
            'conciliated' => $this->conciliation ,
            'cardId' => $this->cardId ,
            'cardNumber' => $this->cardNumber ,
            'paymentProcessorName' => $this->paymentProcessorName ,
            'amount' => $this->amount ,
            'amountFormat' => $this->amountFormat() ,
            'spei' => $this->spei ,
            'referencePayCash' => $this->referencePayCash ,
            'instructionsUrls' => $this->instructionsUrlsToArray() ,
            'conciliationNumber' => $this->conciliationNumber ?? '' ,
            'emails' => $this->emails ,
            'registerDate' => $this->registerDate ,
            'active' => $this->active
        ];
    }

}