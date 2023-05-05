<?php

namespace Viabo\Backend\Controller\security\user\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\find\FindLegalRepresentativeCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class LegalRepresentativeFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $username = $request->headers->get('Username');
            $data = $this->ask(new FindLegalRepresentativeCommand($username));
            $this->startSession($data->tokenData);
            $token = $this->encode($data->tokenData);

            return new JsonResponse(['token' => $token]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}