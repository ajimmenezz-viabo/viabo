<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\backoffice\projection\application\find_companies_balance\BalanceCompaniesQueryByStpAccount;
use Viabo\backoffice\projection\application\find_company_by_bank_account\CompanyQueryByBankAccount;
use Viabo\security\user\application\find\AdministratorsStpQuery;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\spei\stpAccount\application\find\StpAccountQuery;
use Viabo\spei\stpAccount\application\find_stp_account_by_number\StpAccountQueryByNumber;
use Viabo\spei\transaction\domain\exceptions\StpAccountCompanyNotExist;

final readonly class OriginAccountDataFinder
{
    public function __construct(private QueryBus $queryBus)
    {
    }

    public function __invoke(string $originBankAccount, bool $internalTransaction): array
    {
        $stpAccount = $this->queryBus->ask(new StpAccountQueryByNumber($originBankAccount));
        if (!empty($stpAccount->data)) {
            $data = $stpAccount->data[0];
            return [
                'type' => 'stpAccount',
                'companyId' => '',
                'rfc' => '',
                'bankAccount' => $data['number'],
                'acronym' => $data['acronym'],
                'name' => $data['company'],
                'balance' => $this->calculateBalanceStpAccount($data['id'], $data['balance']),
                'emails' => $this->AdminsStpEmails(),
                'number' => $data['number'],
                'company' => $data['company'],
                'commissions' => [],
                'key' => $data['key'],
                'url' => $data['url'],
            ];
        }

        $company = $this->queryBus->ask(new CompanyQueryByBankAccount($originBankAccount));
        $stpAccount = ['number' => '', 'company' => '', 'key' => '', 'url' => ''];
        if (!$internalTransaction) {
            $stpAccount = $this->searchStpAccountCompany($company->data, $originBankAccount);
        }

        return array_merge([
            'type' => 'company',
            'companyId' => $company->data['id'],
            'rfc' => $company->data['rfc'],
            'bankAccount' => $originBankAccount,
            'acronym' => '',
            'name' => $company->data['fiscalName'],
            'balance' => $company->data['balance'],
            'emails' => $this->AdminsStpEmails(),
            'commissions' => $company->data['speiCommissions']
        ], $stpAccount);
    }

    public function searchStpAccountCompany(array $company, string $originBankAccount): array
    {
        try {
            $stpAccount = $this->queryBus->ask(new StpAccountQuery($company['stpAccountId']));
            return $stpAccount->data;
        } catch (\DomainException) {
            throw new StpAccountCompanyNotExist($originBankAccount);
        }
    }

    private function calculateBalanceStpAccount(string $stpAccountId, float $balance)
    {
        $balanceCompanies = $this->queryBus->ask(new BalanceCompaniesQueryByStpAccount($stpAccountId));
        $balance = $balance - $balanceCompanies->data['balance'];
        return max($balance, 0);
    }

    private function AdminsStpEmails(): string
    {
        $admins = $this->queryBus->ask(new AdministratorsStpQuery());
        $emails = array_map(function (array $user) {
            return $user['email'];
        }, $admins->data);

        return implode(',', $emails);
    }
}