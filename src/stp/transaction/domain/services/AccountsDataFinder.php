<?php declare(strict_types=1);


namespace Viabo\stp\transaction\domain\services;


use Viabo\backoffice\projection\application\find_company_by_bank_account\CompanyQueryByBankAccount;
use Viabo\security\user\application\find\AdministratorsStpQuery;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\stp\bank\application\find\BankQuery;
use Viabo\stp\externalAccount\application\find\ExternalAccountQuery;
use Viabo\stp\stpAccount\application\find_stp_account_by_number\StpAccountQueryByNumber;

final readonly class AccountsDataFinder
{
    public function __construct(private QueryBus $queryBus)
    {
    }

    public function __invoke(array $accounts, bool $isInternalTransaction): array
    {
        if ($isInternalTransaction) {
            return $this->companies($accounts);
        } else {
            return $this->externalAccounts($accounts);
        }
    }

    public function externalAccounts(array $externalAccounts): array
    {
        return array_map(function (array $externalAccount) {
            $account = $this->queryBus->ask(new ExternalAccountQuery($externalAccount['bankAccount']));
            $bank = $this->queryBus->ask(new BankQuery($account->data['bankId']));
            $externalAccount['type'] = 'externalAccount';
            $externalAccount['companyId'] = '';
            $externalAccount['rfc'] = $account->data['rfc'];
            $externalAccount['bankAccount'] = $account->data['interbankCLABE'];
            $externalAccount['beneficiary'] = $account->data['beneficiary'];
            $externalAccount['email'] = $account->data['email'];
            $externalAccount['bankName'] = $bank->data['shortName'];
            $externalAccount['bankCode'] = $bank->data['code'];

            return $externalAccount;
        }, $externalAccounts);
    }

    public function searchCompany(string $bankAccount): array
    {
        try {
            $companyData = $this->queryBus->ask(new CompanyQueryByBankAccount($bankAccount));
            return $companyData->data;
        } catch (\DomainException) {
            return ['id' => '', 'rfc' => '', 'fiscalName' => '', 'users' => []];
        }
    }

    public function addData(array $transactions): array
    {
        return array_map(function (array $transaction) {
            $sourceCompany = $this->companies([
                ['bankAccount' => $transaction['cuentaOrdenante'], 'businessId' => $transaction['businessId']]
            ]);
            $destinationCompany = $this->companies([
                ['bankAccount' => $transaction['cuentaBeneficiario'], 'businessId' => $transaction['businessId']]
            ]);
            $data = ['sourceCompany' => $sourceCompany[0], 'destinationCompany' => $destinationCompany[0]];
            return array_merge($transaction, $data, ['commissions' => $transaction['commissions'] ?? []]);
        }, $transactions);
    }

    private function companies(array $companies): array
    {
        return array_map(function (array $company) {
            $bankAccountData = $this->getBankAccountData($company['bankAccount'], $company['businessId']);
            $company['type'] = $bankAccountData['type'];
            $company['companyId'] = $bankAccountData['companyId'];
            $company['rfc'] = $bankAccountData['rfc'];
            $company['beneficiary'] = $bankAccountData['beneficiary'];
            $company['email'] = $bankAccountData['emails'];
            $company['bankName'] = '';
            $company['bankCode'] = '';

            return $company;
        }, $companies);
    }

    private function getBankAccountData(string $bankAccount, string $businessId): array
    {
        $stpAccount = $this->queryBus->ask(new StpAccountQueryByNumber($bankAccount));

        if (!empty($stpAccount->data)) {
            $admins = $this->queryBus->ask(new AdministratorsStpQuery($businessId));
            $data = $stpAccount->data[0];
            return [
                'type' => 'stpAccount',
                'companyId' => '',
                'rfc' => '',
                'beneficiary' => $data['company'],
                'emails' => $this->getEmails($admins->data)
            ];
        } else {
            $companyData = $this->searchCompany($bankAccount);
            return [
                'type' => 'company',
                'companyId' => $companyData['id'],
                'rfc' => $companyData['rfc'],
                'beneficiary' => $companyData['fiscalName'],
                'emails' => $this->getEmails($companyData['users'])
            ];
        }
    }

    private function getEmails(array $users): string
    {
        $emails = array_map(function (array $user) {
            return $user['email'];
        }, $users);

        return implode(',', $emails);
    }

}