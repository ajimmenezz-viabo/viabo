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

    public function __invoke(
        array  $originAccount,
        array  $destinationsAccounts,
        string $concept,
        string $userId,
        bool   $isInternalTransaction
    ): Transactions
    {
        $outType = $this->typeFinder->speiOutType();
        $statusId = $isInternalTransaction ?
            $this->statusFinder->liquidated() :
            $this->statusFinder->inTransit();
        $transactionsData = [];
        foreach ($destinationsAccounts as $destinationsAccount) {
            $transactionsData[] = ['transactionId' => $destinationsAccount['transactionId'],
                'concept' => $concept,
                'sourceAccountType' => $originAccount['type'],
                'sourceAccount' => $originAccount['bankAccount'],
                'sourceAcronym' => $originAccount['acronym'] ?? '',
                'sourceName' => $originAccount['name'],
                'sourceEmail' => $originAccount['emails'],
                'destinationAccountType' => $destinationsAccount['type'],
                'destinationAccount' => $destinationsAccount['bankAccount'],
                'destinationName' => $destinationsAccount['beneficiary'],
                'destinationEmail' => $destinationsAccount['email'],
                'bankCode' => $destinationsAccount['bankCode'],
                'amount' => NumberFormat::float($destinationsAccount['amount']),
                'commissions' => $originAccount['commissions'],
                'userId' => $userId,
                'additionalData' => [
                    'isInternalTransaction' => $isInternalTransaction,
                    'sourceCompanyId' => $originAccount['companyId'],
                    'sourceRfc' => $originAccount['rfc'],
                    'destinationCompanyId' => $destinationsAccount['companyId'],
                    'destinationRfc' => $destinationsAccount['rfc'],
                    'destinationBankName' => $destinationsAccount['bankName']
                ]
            ];
        }
        return Transactions::fromValues($transactionsData, $outType, $statusId);
    }

}