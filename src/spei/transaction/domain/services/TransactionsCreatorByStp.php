<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\shared\domain\utils\NumberFormat;
use Viabo\spei\transaction\domain\Transactions;

final readonly class TransactionsCreatorByStp
{
    public function __construct(
        private TransactionTypeFinder $typeFinder,
        private StatusFinder          $statusFinder,
    )
    {
    }

    public function __invoke(array $transactions, string $stpOperationType): Transactions
    {
        $transactionType = $stpOperationType !== 'speiIn' ?
            $this->typeFinder->speiOutType() :
            $this->typeFinder->speiInType();
        $statusId = $this->statusFinder->liquidated();
        $transactionsData = [];
        foreach ($transactions as $transaction) {
            $transactionsData[] = [
                'businessId' => $transaction['businessId'],
                'concept' => $transaction['conceptoPago'],
                'sourceAccountType' => '',
                'sourceAccount' => $transaction['cuentaOrdenante'],
                'sourceAcronym' => $transaction['claveRastreo'],
                'sourceName' => $transaction['nombreOrdenante'],
                'sourceEmail' => '',
                'destinationAccountType' => '',
                'destinationAccount' => $transaction['cuentaBeneficiario'],
                'destinationName' => $transaction['nombreBeneficiario'],
                'destinationEmail' => '',
                'bankCode' => $transaction['institucionOrdenante'] ?? $transaction['institucionOperante'],
                'amount' => NumberFormat::float($transaction['monto']),
                'commissions' => $transaction['commissions'],
                'liquidationDate' => $transaction['tsLiquidacion'],
                'urlCEP' => $transaction['urlCEP'] ?? '',
                'stpId' => $transaction['id'] ?? $transaction['idEF'],
                'api' => $transaction['api'],
                'userId' => '',
                'additionalData' => [
                    'stpOperationType' => $stpOperationType,
                    'stpAccountId' => $transaction['stpAccountId'],
                    'stpAccountNumber' => $transaction['stpAccountNumber'],
                    'sourceCompanyId' => $transaction['companyId'] ?? $transaction['sourceCompany']['companyId'],
                    'sourceRfc' => $transaction['rfc'] ?? $transaction['sourceCompany']['rfc'],
                    'destinationCompanyId' => $transaction['companyId'] ?? $transaction['destinationCompany']['companyId'],
                    'destinationRfc' => $transaction['rfc'] ?? $transaction['destinationCompany']['rfc'],
                    'destinationBankName' => $transaction['bankName'] ?? $transaction['destinationCompany']['bankName']
                ]
            ];
        }
        return Transactions::fromStp($transactionsData, $transactionType, $statusId);
    }

}