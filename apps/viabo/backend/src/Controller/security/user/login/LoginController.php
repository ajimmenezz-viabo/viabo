<?php

namespace Viabo\Backend\Controller\security\user\login;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use Viabo\security\user\application\login\LoginQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class LoginController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $data = $this->ask(new LoginQuery($data['username'] , $data['password']));
            $this->startSession($data->token);
            $token = $this->encode($data->token);

            return new JsonResponse(['token' => $token]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}