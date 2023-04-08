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

    public function __invoke(string $token , Request $request): Response
    {
        try {
            $tokenData = $this->decode($token);
            $request = $request->toArray();

            $legalRepresentative = $tokenData['id'];
            $commerceId = $request['commerceId'];

            $this->dispatch(new UpdateCommerceCommand(
                $legalRepresentative ,
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

            $this->dispatch(new UpdateViaboServicesCommand($legalRepresentative , $commerceId , $request['services']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}