<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\stpAccount\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CompaniesQueryByAdminUser;
use Viabo\backoffice\company\application\find\CompaniesQueryByCostCenter;
use Viabo\backoffice\company\application\find\CompaniesQueryByStpAccount;
use Viabo\backoffice\costCenter\application\find\CostCentersQueryByAdminUser;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\stpAccount\application\find\StpAccountQuery;
use Viabo\spei\stpAccount\application\find\StpAccountsQuery;


final readonly class AccountsFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $accounts['sectionData'] = $this->defineSection($tokenData['profileId']);
            $accounts['stpAccounts'] = $this->searchStpAccounts();
            $accounts['costCenters'] = $this->searchCostCenters($tokenData['id']);
            $accounts['companies'] = $this->searchCompanies($tokenData['id']);

            return new JsonResponse($this->opensslEncrypt($accounts));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    private function defineSection(string $profileId): string
    {
        return match ($profileId) {
            '5' => 'stpAccounts',
            '6' => 'costCenters',
            '7' => 'companies',
            default => ''
        };
    }

    public function searchStpAccounts(): array
    {
        $stpAccounts = $this->ask(new StpAccountsQuery());
        return array_map(function (array $stpAccount) {
            $companies = $this->ask(new CompaniesQueryByStpAccount($stpAccount['id']));
            $data['id'] = $stpAccount['id'];
            $data['name'] = $stpAccount['company'];
            $data['account'] = $stpAccount['number'];
            $data['balance'] = $stpAccount['balance'];
            $data['balanceDate'] = $stpAccount['balanceDate'];
            $data['pendingCharges'] = $stpAccount['pendingCharges'];
            $data['companiesBalance'] = array_sum(array_map(function (array $company) {
                return $company['balance'];
            }, $companies->data));
            $data['availableBalance'] = $data['balance'] - $data['companiesBalance'];
            $data['companies'] = $this->formatCompanies($companies->data);
            return $data;
        }, $stpAccounts->data);
    }

    public function searchCostCenters(string $userId): array
    {
        $costCenters = $this->ask(new CostCentersQueryByAdminUser($userId));
        return array_map(function (array $costCenter) {
            $data['id'] = $costCenter['id'];
            $data['name'] = $costCenter['name'];
            $companies = $this->ask(new CompaniesQueryByCostCenter($costCenter['id']));
            $data['companies'] = $this->formatCompanies($companies->data);
            return $data;
        }, $costCenters->data);
    }

    private function searchCompanies(string $userId): array
    {
        $companies = $this->ask(new CompaniesQueryByAdminUser($userId));
        return array_values(array_map(function (array $company) {
            $stpAccount = '';
            if (!empty($company['stpAccountId'])) {
                $stpAccount = $this->ask(new StpAccountQuery($company['stpAccountId']));
                $stpAccount = $stpAccount->data['number'];
            }
            unset($company['commissions']['updatedByUser'], $company['commissions']['stpAccount']);
            return [
                'id' => $company['id'],
                'name' => $company['fiscalName'],
                'balance' => floatval($company['balance']),
                'account' => implode(',', $company['bankAccounts']),
                'commissions' => $company['commissions'],
                'stpAccount' => $stpAccount
            ];
        }, $companies->data));
    }

    function formatCompanies(array $companies): array
    {
        return array_values(array_map(function (array $company) {
            unset($company['commissions']['updatedByUser'], $company['commissions']['stpAccount']);
            return [
                'id' => $company['id'],
                'name' => $company['fiscalName'],
                'balance' => floatval($company['balance']),
                'account' => implode(',', $company['bankAccounts']),
                'commissions' => $company['commissions']
            ];
        }, $companies));
    }

}