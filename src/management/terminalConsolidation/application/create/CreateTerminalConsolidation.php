<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\application\create;

use Viabo\management\shared\domain\commerce\CommerceId;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidation;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationReferenceNumber;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationRepository;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationSpeiCardTransactionId;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationTerminalId;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationUserId;

final readonly class CreateTerminalConsolidation
{
    public function __construct(private TerminalConsolidationRepository $repository)
    {
    }

    public function __invoke(
        CommerceId                                 $commerceId,
        TerminalConsolidationUserId                $userId,
        TerminalConsolidationTerminalId            $terminalId,
        TerminalConsolidationSpeiCardTransactionId $speiCardTransactionId,
        array                                      $transactions,
        string                                     $threshold
    ):void
    {
        $referenceNumber = TerminalConsolidationReferenceNumber::random();
        foreach ($transactions as $transaction) {
            $terminalConsolidation = TerminalConsolidation::create(
                $commerceId,
                $speiCardTransactionId,
                $terminalId,
                $userId,
                $referenceNumber,
                $transaction['transactionId'],
                $transaction['amount'],
            );

            $this->repository->save($terminalConsolidation);
        }

    }


}
