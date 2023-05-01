<?php

namespace Viabo\Backend\Controller\business\commerce;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\FindCommerceViewQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $this->ask(new FindCommerceViewQuery($tokenData['id']));

            return new JsonResponse($data->commerce);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}