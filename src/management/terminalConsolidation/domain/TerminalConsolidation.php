<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\domain;


use Viabo\business\shared\domain\commerce\CommerceId;

final readonly class TerminalConsolidation
{
    public function __construct(
        private TerminalConsolidationId                    $id,
        private CommerceId                                 $commerceId,
        private TerminalConsolidationMainCardTransactionId $mainCardTransactionId,
        private TerminalConsolidationTransactionId         $transactionId,
        private TerminalConsolidationAmount                $amount,
        private TerminalConsolidationTerminalId            $terminalId,
        private TerminalConsolidationUserId                $userId,
        private TerminalConsolidationRegisterDate          $registerDate
    )
    {
    }

    public function toArray()
    {
        return [
            'id' => $this->id->value(),
            'commerceId' => $this->commerceId->value(),
            'mainCardTransactionId' => $this->mainCardTransactionId->value(),
            'transactionId' => $this->transactionId->value(),
            'amount' => $this->amount->value(),
            'terminalId' => $this->terminalId->value(),
            'userId' => $this->userId->value(),
            'registerDate' => $this->registerDate->value()
        ];
    }
}
