<?php

namespace Viabo\Backend\Controller\security\user\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\create\CreateCommerceDemoUserCommand;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class CommerceDemoUserCreatorController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $this->dispatch(new CreateCommerceDemoUserCommand(
                $data['name'],
                $data['phone'],
                $data['email']
            ));
            $data = $this->ask(new FindUserQuery('',$data['email']));
            $tokenData = ['id' => $data->userData['id']];
            $token = $this->encode($tokenData);

            return new JsonResponse(['token' => $token]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}