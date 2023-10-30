<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

final class TerminalView
{
    public function __construct(
        private string $id ,
        private string $commerceId ,
        private string $merchantId ,
        private string $terminalId ,
        private string $apiData ,
        private string $createdByUser ,
        private string $name ,
        private string $typeId ,
        private string $typeName ,
        private string $registerDate ,
        private mixed  $speiCard ,
        private ?string $cardId ,
        private bool   $isExternalConciliation ,
        private string $active
    )
    {
    }

    public function isConciliationExternal(mixed $speiCards): bool
    {
        return empty($this->speiCard) || !in_array($this->speiCard , $speiCards);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'commerceId' => $this->commerceId ,
            'merchantId' => $this->merchantId ,
            'terminalId' => $this->terminalId ,
            'apiData' => $this->apiData ,
            'createdByUser' => $this->createdByUser ,
            'name' => $this->name ,
            'typeId' => $this->typeId ,
            'typeName' => $this->typeName ,
            'registerDate' => $this->registerDate ,
            'speiCard' => $this->speiCard ,
            'cardId' => $this->cardId ,
            'active' => $this->active ,
            'isConciliationExternal' => $this->isExternalConciliation
        ];
    }
}
