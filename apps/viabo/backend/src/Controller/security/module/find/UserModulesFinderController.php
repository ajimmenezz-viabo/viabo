<?php

namespace Viabo\Backend\Controller\security\module\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\commerceUser\application\find\CommerceQueryByUser;
use Viabo\backoffice\company\application\find_company_by_user\CompanyQueryByUser;
use Viabo\backoffice\services\application\find\CommerceServicesQuery;
use Viabo\security\module\application\find\UserModulesQuery;
use Viabo\security\user\application\find\FindUserPermissionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class UserModulesFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerceServices = $this->searchCommerceServices($tokenData);
            $userPermission = $this->ask(new FindUserPermissionQuery($tokenData['id']));
            $modules = $this->ask(new UserModulesQuery($userPermission->permissions , $commerceServices));

            return new JsonResponse($modules->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }

    private function searchCommerceServices(array $tokenData): array
    {
        $administrator = '2';
        if ($tokenData['profileId'] === $administrator) {
            return [];
        }

        $commerce = $this->commerceQuery($tokenData['id']);
        $commerceServices = $this->ask(new CommerceServicesQuery($commerce['id']));
        return $commerceServices->data;
    }

    private function commerceQuery(string $userId): array
    {
        try {
            $commerce = $this->ask(new CommerceQueryByUser($userId));
            return $commerce->data;
        } catch (\DomainException) {
            $commerce = $this->ask(new CompanyQueryByUser($userId));
            return $commerce->data;
        }
    }
}