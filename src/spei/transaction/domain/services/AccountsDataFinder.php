<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\backoffice\company\application\find\CompanyQueryByBankAccount;
use Viabo\security\user\application\find\AdministratorsStpQuery;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\spei\bank\application\find\BankQuery;
use Viabo\spei\externalAccount\application\find\ExternalAccountQuery;
use Viabo\spei\stpAccount\application\find\StpAccountQueryByNumber;

final readonly class AccountsDataFinder
{
    public function __construct(private QueryBus $queryBus)
    {
    }

    public function companies(array $companies): array
    {
        return array_map(function (array $company) {
            $bankAccountData = $this->getBankAccountData($company['bankAccount']);
            $company['beneficiary'] = $bankAccountData['beneficiary'];
            $company['email'] = $bankAccountData['emails'];
            $company['bankName'] = '';
            $company['bankCode'] = '';

            return $company;
        }, $companies);
    }

    public function externalAccounts(array $externalAccounts): array
    {
        return array_map(function (array $externalAccount) {
            $account = $this->queryBus->ask(new ExternalAccountQuery($externalAccount['bankAccount']));
            $bank = $this->queryBus->ask(new BankQuery($account->data['bankId']));
            $externalAccount['bankAccount'] = $account->data['interbankCLABE'];
            $externalAccount['beneficiary'] = $account->data['beneficiary'];
            $externalAccount['email'] = $account->data['email'];
            $externalAccount['bankName'] = $bank->data['shortName'];
            $externalAccount['bankCode'] = $bank->data['code'];

            return $externalAccount;
        }, $externalAccounts);
    }

    private function getBankAccountData($bankAccount): array
    {
        $stpAccount = $this->queryBus->ask(new StpAccountQueryByNumber($bankAccount));
        if (!empty($stpAccount->data)) {
            $admins = $this->queryBus->ask(new AdministratorsStpQuery());
            $data = $stpAccount->data[0];
            return [
                'beneficiary' => $data['company'],
                'emails' => $this->getEmails($admins->data)
            ];
        } else {
            $companyData = $this->queryBus->ask(new CompanyQueryByBankAccount($bankAccount));
            return [
                'beneficiary' => $companyData->data['fiscalName'],
                'emails' => $this->getEmails($companyData->data['users'])
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