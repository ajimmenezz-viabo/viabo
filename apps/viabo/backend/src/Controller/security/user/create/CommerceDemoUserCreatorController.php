<?php

namespace Viabo\Backend\Controller\security\user\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\create\CreateCommerceDemoUserCommand;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\security\user\application\update\DemoUserValidateCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class CommerceDemoUserCreatorController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();
            $this->dispatch(new DemoUserValidateCommand($data['email']));
            $this->dispatch(new CreateCommerceDemoUserCommand(
                $data['name'] ,
                $data['phone'] ,
                $data['email']
            ));
            $data = $this->ask(new FindUserQuery('' , $data['email']));
            $token = $this->encode(array_merge($tokenData , ['id' => $data->data['id']]));

            return new JsonResponse(['token' => $token]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
