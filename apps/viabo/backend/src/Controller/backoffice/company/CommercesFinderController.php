<?php

namespace Viabo\Backend\Controller\backoffice\company;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CommercesQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercesFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $commerces = $this->ask(new CommercesQuery());

            return new JsonResponse($commerces->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}