<?php

namespace Viabo\Backend\Controller\business\commerce;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceFinderController extends ApiController
{

    public function __invoke(string $commerceId , Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $commerce = $this->ask(new CommerceQuery($commerceId));

            return new JsonResponse($commerce->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}