<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\backoffice\company\application\find\BalanceCompaniesQueryByStpAccount;
use Viabo\backoffice\company\application\find\CompanyQueryByBankAccount;
use Viabo\security\user\application\find\AdministratorsStpQuery;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\spei\stpAccount\application\find\StpAccountQuery;
use Viabo\spei\stpAccount\application\find\StpAccountQueryByNumber;
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
                'bankAccount' => $data['number'],
                'acronym' => $data['acronym'],
                'name' => $data['company'],
                'balance' => $this->calculateBalanceStpAccount($data['id'], $data['balance']),
                'emails' => $this->AdminsStpEmails(),
                'number' => $data['number'],
                'company' => $data['company'],
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
            'bankAccount' => $originBankAccount,
            'acronym' => '',
            'name' => $company->data['fiscalName'],
            'balance' => $company->data['balance'],
            'emails' => $this->AdminsStpEmails(),
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