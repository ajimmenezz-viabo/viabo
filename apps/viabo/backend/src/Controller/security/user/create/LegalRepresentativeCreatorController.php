<?php

namespace Viabo\Backend\Controller\security\user\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\create\CreateLegalRepresentativeQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class LegalRepresentativeCreatorController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $this->ask(new CreateLegalRepresentativeQuery(
                $data['name'] ,
                $data['lastname'] ,
                $data['phone'] ,
                $data['email'] ,
                $data['password'] ,
                $data['confirmPassword']
            ));

            return new JsonResponse('');
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}