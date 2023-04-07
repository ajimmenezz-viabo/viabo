<?php

namespace Viabo\Backend\Controller\catalogs\viaboService;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Viabo\catalogs\viaboService\application\find\FindViaboServicesQuery;
use Viabo\catalogs\viaboService\application\find\ViaboServicesResponse;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class ServicesCatalogFinderController extends ApiController
{

    public function __invoke(string $token): Response
    {
        try {
            $this->decode($token);

            /** @var ViaboServicesResponse $response */
            $data = $this->ask(new FindViaboServicesQuery());

            return new JsonResponse($data->services());
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}