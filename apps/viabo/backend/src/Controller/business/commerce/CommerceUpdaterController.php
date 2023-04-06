<?php

namespace Viabo\Backend\Controller\business\commerce;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\update\UpdateCommerceCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class CommerceUpdaterController extends ApiController
{

    public function __invoke(string $token , Request $request): Response
    {
        try {
            $tokenData = $this->decode($token);
            $files = $request->files->all();
            $request = $request->toArray();

            $this->dispatch(new UpdateCommerceCommand(
                $tokenData['id'] ,
                $request['commerceId'] ,
                $request['fiscalPersonType'] ,
                $request['taxName'] ,
                $request['tradeName'] ,
                $request['rfc'] ,
                $request['employees'] ,
                $request['branchOffices'] ,
                $request['pointSaleTerminal'] ,
                $request['paymentApi'] ,
                $request['services'],
                $files,
                $request['registerStep']
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}