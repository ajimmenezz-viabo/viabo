<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\shared\domain\utils\NumberFormat;
use Viabo\spei\transaction\domain\Transactions;

final readonly class TransactionsCreator
{
    public function __construct(
        private TransactionTypeFinder $typeFinder,
        private StatusFinder          $statusFinder,
    )
    {
    }

    public function internal(
        array  $originAccount,
        array  $destinationsAccounts,
        string $concept,
        string $userId
    ): Transactions
    {
        $outType = $this->typeFinder->speiOutType();
        $liquidateStatus = $this->statusFinder->liquidated();

        $transactionsData = [];
        foreach ($destinationsAccounts as $destinationsAccount) {
            $transactionsData[] = [
                'transactionId' => $destinationsAccount['transactionId'],
                'concept' => $concept,
                'sourceAccountType' => $originAccount['type'],
                'sourceAccount' => $originAccount['bankAccount'],
                'sourceName' => $originAccount['name'],
                'sourceEmail' => $originAccount['emails'],
                'destinationAccountType' => $destinationsAccount['type'],
                'destinationAccount' => $destinationsAccount['bankAccount'],
                'destinationName' => $destinationsAccount['beneficiary'],
                'destinationEmail' => $destinationsAccount['email'],
                'amount' => NumberFormat::float($destinationsAccount['amount']),
                'commissions' => $originAccount['commissions'],
                'userId' => $userId
            ];
        }
        return Transactions::fromInternalSpeiOut($transactionsData, $outType, $liquidateStatus);
    }

    public function external(
        array  $originAccount,
        array  $destinationsAccounts,
        string $concept,
        mixed  $userId
    ): Transactions
    {
        $outType = $this->typeFinder->speiOutType();
        $inTransitStatus = $this->statusFinder->inTransit();

        $transactionsData = [];
        foreach ($destinationsAccounts as $destinationsAccount) {
            $transactionsData[] = [
                'transactionId' => $destinationsAccount['transactionId'],
                'concept' => $concept,
                'sourceAccountType' => $originAccount['type'],
                'sourceAccount' => $originAccount['bankAccount'],
                'sourceAcronym' => $originAccount['acronym'],
                'sourceName' => $originAccount['name'],
                'sourceEmail' => $originAccount['emails'],
                'destinationAccountType' => $destinationsAccount['type'],
                'destinationAccount' => $destinationsAccount['bankAccount'],
                'destinationName' => $destinationsAccount['beneficiary'],
                'destinationEmail' => $destinationsAccount['email'],
                'bankCode' => $destinationsAccount['bankCode'],
                'amount' => NumberFormat::float($destinationsAccount['amount']),
                'commissions' => $originAccount['commissions'],
                'userId' => $userId
            ];
        }
        return Transactions::fromExternalSpeiOut($transactionsData, $outType, $inTransitStatus);
    }

}