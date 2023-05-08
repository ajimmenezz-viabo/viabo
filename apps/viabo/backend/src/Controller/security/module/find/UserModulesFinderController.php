<?php

namespace Viabo\Backend\Controller\security\module\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\module\application\find\FindUserModelsQuery;
use Viabo\security\user\application\find\FindUserPermissionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class UserModulesFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $userPermission = $this->ask(new FindUserPermissionQuery($tokenData['id']));
            $data = $this->ask(new FindUserModelsQuery($userPermission->permissions));

            return new JsonResponse($data->modules);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}