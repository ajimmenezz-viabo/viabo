<?php

namespace Viabo\Backend\Controller\security\user\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\find\AdministratorsOfCompaniesQuery;
use Viabo\security\user\application\find\AdministratorsOfCostCenterQuery;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class AdministratorsOfCostCenterFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $administrators = $this->ask(new AdministratorsOfCostCenterQuery());

            return new JsonResponse($administrators->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

}