<?php

namespace Viabo\Backend\Controller\security\module\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\business\commerceUser\application\find\CommerceQueryByUser;
use Viabo\business\services\application\find\CommerceServicesQuery;
use Viabo\security\module\application\find\UserModulesQuery;
use Viabo\security\user\application\find\FindUserPermissionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class UserModulesFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->commerceQuery($tokenData['id']);
            $commerceServices = $this->ask(new CommerceServicesQuery($commerce['id']));
            $userPermission = $this->ask(new FindUserPermissionQuery($tokenData['id']));
            $modules = $this->ask(new UserModulesQuery($userPermission->permissions, $commerceServices->data));

            return new JsonResponse($modules->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }

    private function commerceQuery(string $userId): array
    {
        try {
            $commerce = $this->ask(new CommerceQueryByUser($userId));
            return $commerce->data;
        } catch (\DomainException) {
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($userId));
            return $commerce->data;
        }
    }
}