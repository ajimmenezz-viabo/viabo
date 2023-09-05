<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

final readonly class TerminalSpeiCardsView
{
    public function __construct(
        private string $id,
        private string $cardNumber,
        private string $speiCard,
        private string $clientKey,
        private string $terminalId,
        private string $commerceId,
        private string $paymentProcessorId,
    )
    {
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'cardNumber' => $this->cardNumber,
            'speiCard' => $this->speiCard,
            'clientKey' => $this->clientKey,
            'terminalId' => $this->terminalId,
            'commerceId' => $this->commerceId,
            'paymentProcessorId' => $this->paymentProcessorId
        ];
    }
}
