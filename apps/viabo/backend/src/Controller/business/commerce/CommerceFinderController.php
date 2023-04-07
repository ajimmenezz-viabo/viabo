<?php

namespace Viabo\Backend\Controller\business\commerce;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\FindCommerceQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceFinderController extends ApiController
{

    public function __invoke(string $token): Response
    {
        try {
            $tokenData = $this->decode($token);
            $data = $this->ask(new FindCommerceQuery($tokenData['id']));

            return new JsonResponse($data->commerce());
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}