<?php

namespace Viabo\Backend\Controller\security\module\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find_company_by_user\CompanyQueryByUser;
use Viabo\backoffice\services\application\find\CommerceServicesQuery;
use Viabo\security\module\application\find\UserModulesQuery;
use Viabo\security\user\application\find\UserPermissionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class UserModulesFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $companyServices = $this->searchCompanyServices($tokenData);
            $permission = $this->ask(new UserPermissionQuery($tokenData['id']));
            $modules = $this->ask(new UserModulesQuery($permission->data, $companyServices));

            return new JsonResponse($modules->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    private function searchCompanyServices(array $tokenData): array
    {
        $administrator = '2';
        if ($tokenData['profileId'] === $administrator) {
            return [];
        }

        $company = $this->ask(new CompanyQueryByUser($tokenData['id']));
        return $company->data['services'];
    }

}