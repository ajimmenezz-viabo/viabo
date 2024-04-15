<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find_company_by_user;


use Viabo\backoffice\company\application\find\CompanyResponse;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyUserNotAssociated;
use Viabo\backoffice\company\domain\projection\CompanyProjection;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyFinderByUser
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $userId): CompanyResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'users', 'operator' => 'CONTAINS', 'value' => $userId],
        ]);
        $companies = $this->repository->searchCriteria(new Criteria($filters), true);

        if (empty($companies)) {
            throw new CompanyUserNotAssociated();
        }

        $company = array_filter($companies, function (CompanyProjection $projection) {
            return $projection->hasUserProfileOfType('3');
        });
        return new CompanyResponse($this->toArrayOld($company[0]->toArray()));
    }

    function toArrayOld(array $data): array
    {
        $admin = $data['users'][0];
        return [
            'id' => $data['id'],
            'folio' => $data['folio'],
            'fatherId' => $data['fatherId'],
            'legalRepresentative' => $admin['id'],
            'legalRepresentativeName' => $admin['name'],
            'legalRepresentativeEmail' => $admin['email'],
            'legalRepresentativePhone' => '',
            'legalRepresentativeRegister' => '',
            'legalRepresentativeLastSession' => '',
            'fiscalPersonType' => $data['fiscalPersonType'],
            'fiscalName' => $data['fiscalName'] ?? '',
            'tradeName' => $data['tradeName'],
            'rfc' => $data['rfc'],
            'postalAddress' => $data['postalAddress'],
            'phoneNumbers' => $data['phoneNumbers'],
            'logo' => $data['logo'],
            'slug' => $data['slug'],
            'balance' => $data['balance'],
            'bankAccount' => '',
            'publicTerminal' => '',
            'employees' => '0',
            'branchOffices' => '0',
            'pointSaleTerminal' => '0',
            'paymentApi' => '0',
            'type' => $data['type'],
            'typeName' => $data['typeName'],
            'allowTransactions' => '',
            'statusId' => $data['statusId'],
            'statusName' => $data['statusName'],
            'stpAccountId' => '',
            'registerStep' => $data['registerStep'],
            'services' => $data['services'],
            'servicesIds' => '[]',
            'documents' => $data['documents'],
            'commissions' => $data['commissions'],
            'createdByUser' => $data['createdByUser'],
            'register' => $data['createDate'],
            'active' => $data['active']
        ];
    }
}