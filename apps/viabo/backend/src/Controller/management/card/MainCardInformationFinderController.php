<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\card\application\find\MainCardIdQuery;
use Viabo\management\card\application\find\MainCardInformationQuery;
use Viabo\management\credential\application\find\CardCredentialQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class MainCardInformationFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $paymentProcessorId = $request->get('paymentProcessorId');

            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $cardData = $this->ask(new MainCardIdQuery($commerce->data['id'], $paymentProcessorId));
            $credential = $this->ask(new CardCredentialQuery($cardData->data['cardId']));
            $data = $this->ask(new MainCardInformationQuery($cardData->data['cardId'] , $credential->data));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}