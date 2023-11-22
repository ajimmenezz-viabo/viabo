<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardOperation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\card\application\find\CardQueryBySpei;
use Viabo\management\card\application\find\MasterCardQueryByPaymentProcessor;
use Viabo\management\cardOperation\application\transactions\CardTransactionTerminalCommand;
use Viabo\management\credential\application\find\CardCredentialQuery;
use Viabo\management\terminalTransaction\application\update\UpdateTerminalTransactionLiquidationStatusCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class SharedTerminalsPaymentProcessorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $teminalData = $request->toArray();
            $originCard = $this->ask(new CardQueryBySpei($teminalData['terminal_spei_card']));
            $originCardCredential = $this->ask(new CardCredentialQuery($originCard->data['id']));
            $destinationCard = $this->ask(new MasterCardQueryByPaymentProcessor(
                $teminalData['commerceId'] ,
                $originCard->data['paymentProcessorId']
            ));
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $this->dispatch(new CardTransactionTerminalCommand(
                $tokenData['id'] ,
                $originCard->data['id'] ,
                $destinationCard->data ,
                $originCardCredential->data ,
                $commerce->data['legalRepresentativeEmail'] ,
                $teminalData
            ));
            $liquidationStatusId = '13';
            $this->dispatch(new UpdateTerminalTransactionLiquidationStatusCommand(
                $teminalData['id'] ,
                $liquidationStatusId
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}