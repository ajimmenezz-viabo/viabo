<?php

namespace Viabo\Backend\Controller\backoffice\company;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\update\UpdateCompanyCommandByRegister;
use Viabo\backoffice\services\application\create\UpdateViaboServicesCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class CompanyUpdaterByRegisterController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $request = $request->toArray();
            var_dump($request);
            $companyId = $request['companyId'];
            $this->dispatch(new UpdateCompanyCommandByRegister(
                $companyId ,
                $request['fiscalPersonType'] ,
                $request['fiscalName'] ,
                $request['tradeName'] ,
                $request['rfc'] ,
                $request['employees'] ,
                $request['branchOffices'] ,
                $request['pointSaleTerminal'] ,
                $request['paymentApi'] ,
                $request['registerStep']
            ));
//            $this->dispatch(new UpdateViaboServicesCommand($companyId , $request['services']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}