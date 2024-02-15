<?php

namespace Viabo\Backend\Controller\security\user\login;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\find\UserQueryByUsername;
use Viabo\security\user\application\login\LoginUserCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class LoginController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $this->dispatch(new LoginUserCommand($data['username'] , $data['password']));
            $user = $this->ask(new UserQueryByUsername($data['username']));
            $token = $this->encode($user->data);

            return new JsonResponse(['token' => $token]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}