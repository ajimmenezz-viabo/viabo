<?php

namespace Viabo\Backend\Controller\backoffice\costCenter\find;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CompaniesQueryByCostCenter;
use Viabo\backoffice\costCenter\application\find\CostCentersQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CostCentersFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $costCenters = $this->ask(new CostCentersQuery());
            $costCenters = $this->addCompaniesTotal($costCenters->data);

            return new JsonResponse($costCenters);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    private function addCompaniesTotal(array $costCenters): array
    {
        return array_map(function (array $costCenter) {
            $companies = $this->ask(new CompaniesQueryByCostCenter($costCenter['id']));
            $costCenter['companyTotal'] = count($companies->data);
            return $costCenter;
        }, $costCenters);
    }
}