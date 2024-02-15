<?php

namespace Viabo\Backend\Controller\backoffice\company;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CommerceQueryByLegalRepresentative;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceFinderByLegalRepresentativeController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));

            return new JsonResponse($commerce->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}