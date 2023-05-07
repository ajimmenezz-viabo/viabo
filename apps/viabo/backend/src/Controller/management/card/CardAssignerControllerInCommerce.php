<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\FormalCommerceQuery;
use Viabo\business\credential\application\find\CommerceCredentialQuery;
use Viabo\management\card\application\update\AssignCardCommandInCommerce;
use Viabo\management\credential\application\create\CreateCardCredentialCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardAssignerControllerInCommerce extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();
            $formalCommerceData = $this->ask(new FormalCommerceQuery($data['commerceId']));
            $commerceCredentialsData = $this->ask(new CommerceCredentialQuery($formalCommerceData->formalCommerce['id']));
            $this->dispatch(new CreateCardCredentialCommand(
                $data['cardId'] ,
                $commerceCredentialsData->credential['mainKey'] ,
                $commerceCredentialsData->credential['masterCardKey'] ,
                $commerceCredentialsData->credential['carnetKey']
            ));
            $this->dispatch(new AssignCardCommandInCommerce($data['cardId'] , $data['commerceId']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}