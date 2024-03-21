<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\stpAccount\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CompaniesQuery;
use Viabo\backoffice\company\application\find\CompaniesQueryByCostCenter;
use Viabo\backoffice\company\application\find\CompaniesQueryByStpAccount;
use Viabo\backoffice\costCenter\application\find\CostCentersQuery;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\stpAccount\application\find\StpAccountsQuery;


final readonly class AccountsFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $accounts['sectionData'] = $this->defineSection($tokenData['profileId']);
            $accounts['stpAccounts'] = $this->searchStpAccounts();
            $accounts['costCenters'] = $this->searchCostCenters();
            $accounts['companies'] = $this->searchCompanies($tokenData['profileId']);

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
            '3' => 'companies'
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
            $data['companiesBalance'] = array_sum(array_map(function (array $company) {
                return $company['balance'];
            }, $companies->data));
            $data['availableBalance'] = $data['balance'] - $data['companiesBalance'];
            $data['companies'] = $this->formatCompanies($companies->data);
            return $data;
        }, $stpAccounts->data);
    }

    public function searchCostCenters(): array
    {
        $costCenters = $this->ask(new CostCentersQuery());
        return array_map(function (array $costCenter) {
            $data['id'] = $costCenter['id'];
            $data['name'] = $costCenter['name'];
            $companies = $this->ask(new CompaniesQueryByCostCenter($costCenter['id']));
            $data['companies'] = $this->formatCompanies($companies->data);
            return $data;
        }, $costCenters->data);
    }

    private function searchCompanies(string $userProfileId): array
    {
        $companies = $this->ask(new CompaniesQuery($userProfileId));
        return $this->formatCompanies($companies->data);
    }

    function formatCompanies(array $companies): array
    {
        return array_values(array_map(function (array $company) {
            return [
                'id' => $company['id'],
                'name' => $company['fiscalName'],
                'balance' => floatval($company['balance']),
                'account' => isset($company['bankAccounts']) ?
                    implode(',', $company['bankAccounts']) :
                    $company['bankAccount']
            ];
        }, $companies));
    }

}