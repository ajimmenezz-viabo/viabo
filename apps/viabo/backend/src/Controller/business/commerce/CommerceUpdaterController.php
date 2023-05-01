<?php

namespace Viabo\Backend\Controller\business\commerce;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\update\UpdateCommerceCommand;
use Viabo\business\services\application\create\UpdateViaboServicesCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class CommerceUpdaterController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $request = $request->toArray();

            $commerceId = $request['commerceId'];

            $this->dispatch(new UpdateCommerceCommand(
                $commerceId ,
                $request['fiscalPersonType'] ,
                $request['taxName'] ,
                $request['tradeName'] ,
                $request['rfc'] ,
                $request['employees'] ,
                $request['branchOffices'] ,
                $request['pointSaleTerminal'] ,
                $request['paymentApi'] ,
                $request['registerStep']
            ));

            $this->dispatch(new UpdateViaboServicesCommand($commerceId , $request['services']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}