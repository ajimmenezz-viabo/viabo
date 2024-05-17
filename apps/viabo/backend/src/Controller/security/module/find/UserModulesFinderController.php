<?php

namespace Viabo\Backend\Controller\security\module\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\projection\application\find_company_by_user\CompanyQueryByUser;
use Viabo\backoffice\projection\application\find_company_services_by_user\CompanyServicesTypeIdQueryByUser;
use Viabo\security\module\application\find\UserModulesQuery;
use Viabo\security\user\application\find\UserPermissionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class UserModulesFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $servicesTypeId = $this->ask(new CompanyServicesTypeIdQueryByUser(
                $tokenData['id'],
                $tokenData['profileId'],
                $tokenData['businessId'],
            ));
            $permission = $this->ask(new UserPermissionQuery($tokenData['id']));
            $modules = $this->ask(new UserModulesQuery($permission->data, $servicesTypeId->data));

            return new JsonResponse($modules->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    private function searchCompanyServicesId(array $tokenData): array
    {
        $adminViabo = '2';
        if ($tokenData['profileId'] === $adminViabo) {
            return [];
        }

        $adminSTP = '5';
        if ($tokenData['profileId'] === $adminSTP) {
            return ['4'];
        }

        $company = $this->ask(new CompanyQueryByUser(
            $tokenData['id'],
            $tokenData['businessId'],
            $tokenData['profileId']
        ));

        if (intval($company->data['registerStep']) < 4) {
            throw new \DomainException('No esposible ingresar hasta que se termine de registrar la empresa', 400);
        }

        return array_map(function (array $service) {
            return $service['type'];
        }, $company->data['services']);
    }

}