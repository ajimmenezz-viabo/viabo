<?php

namespace Viabo\Backend\Controller\security\user\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\find_user_by_register\UserQueryByRegisterCompany;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class LegalRepresentativeFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $username = $request->headers->get('Username');
            $user = $this->ask(new UserQueryByRegisterCompany($username));
            $token = $this->encode(['id' => $user->data['id'], 'businessId' => $user->data['businessId']]);

            return new JsonResponse(['token' => $token]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}