<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\spei\transaction\find;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Viabo\backoffice\projection\application\find_company_by_bank_account\CompanyQueryByBankAccount;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\bank\application\find\BankQuery;
use Viabo\spei\externalAccount\application\find\ExternalAccountQuery;
use Viabo\spei\stpAccount\application\find_stp_account_by_number\StpAccountQueryByNumber;
use Viabo\spei\transaction\application\find\TransactionQuery;

final readonly class TransactionViewController extends ApiController
{

    public function __invoke(string $transactionId, Request $request, Environment $twig): Response
    {
        try {
            $transaction = $this->search($transactionId);
            $data = [
                'transactionType' => 'Operación SPEI Deposito',
                'statusName' => $transaction['statusName'],
                'sourceAccount' => $transaction['sourceAccount'],
                'sourceName' => $transaction['sourceName'],
                'sourceRfc' => $transaction['sourceRfc'],
                'destinationAccount' => $transaction['destinationAccount'],
                'destinationName' => $transaction['destinationName'],
                'destinationRfc' => $transaction['destinationRfc'],
                'destinationBankName' => $transaction['bankName'],
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'reference' => $transaction['trackingKey'],
                'date' => $transaction['createDate']
            ];
            $html = $twig->render('spei/notification/emails/spei.external.transaction.html.twig', $data);
            return new Response($html);
        } catch (\DomainException) {
            $html = $twig->render('spei/notification/emails/transaction.spei.not.exist.html.twig');
            return new Response($html);
        }
    }

    private function search(string $transactionId): array
    {
        $transaction = $this->ask(new TransactionQuery($transactionId));
        $transaction = $transaction->data;
        $sourceAccount = $this->searchAccount($transaction['sourceAccount']);
        $destinationAccount = $this->searchAccount($transaction['destinationAccount']);
        $transaction['sourceRfc'] = $sourceAccount['rfc'];
        $transaction['destinationRfc'] = $destinationAccount['rfc'];
        $transaction['bankName'] = $destinationAccount['bankName'];
        return $transaction;
    }

    public function searchAccount(string $accountNumber): array
    {
        try {
            $account = $this->ask(new StpAccountQueryByNumber($accountNumber));
            if (empty($account->data)) {
                $account = $this->ask(new CompanyQueryByBankAccount($accountNumber));
            }
            return ['rfc' => $account->data['rfc'] ?? 'N/A', 'bankName' => 'N/A'];
        } catch (\DomainException) {
            $account = $this->ask(new ExternalAccountQuery($accountNumber));
            $bank = $this->ask(new BankQuery($account->data['bankId']));
            return ['rfc' => $account->data['rfc'], 'bankName' => $bank->data['shortName']];
        }
    }
}