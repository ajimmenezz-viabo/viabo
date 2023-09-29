<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\domain\services;

use Viabo\management\terminalConsolidation\domain\exceptions\TerminalConsolidationNotMath;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationSpeiCardTransactionAmount;

final readonly class ValidatorTerminalConsolidation
{
    public function __construct()
    {
    }

    public function __invoke(
        TerminalConsolidationSpeiCardTransactionAmount $speiCardTransactionAmount,
        string                                         $threshold,
        array                                          $transactions
    ):void
    {
        $total = $this->calculateTotalTransactions($transactions);
        $inferiorLimit = $this->calculateInferiorLimit($total,$threshold);

        if(!$this->validateAmountConsolidation($speiCardTransactionAmount,$total,$inferiorLimit)){
            throw new TerminalConsolidationNotMath();
        }

    }

    public function calculateTotalTransactions(array $transactions): mixed
    {
        $suma = 0;
        foreach ($transactions as $transaction) {
            $suma += $transaction['amount'];
        }
        return $suma;
    }
    public function calculateInferiorLimit(string $total,string $threshold): float|int
    {
        return $total * (1 - ($threshold / 100));
    }

    public function validateAmountConsolidation(
        TerminalConsolidationSpeiCardTransactionAmount $speiCardTransactionAmount,
        string                                         $total,
        mixed                                         $inferiorLimit
    ): bool
    {
        return $total >= $inferiorLimit && $total <= $speiCardTransactionAmount->value();
    }
}
