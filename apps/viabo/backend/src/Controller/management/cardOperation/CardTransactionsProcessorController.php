<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardOperation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\cardOperation\application\transactions\CardTransactionCommand;
use Viabo\management\credential\application\find\CardCredentialQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardTransactionsProcessorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $this->opensslDecrypt($request->toArray());
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $credential = $this->ask(new CardCredentialQuery($data['originCardId']));
            $this->dispatch(new CardTransactionCommand(
                $tokenData['id'],
                $data['originCardId'],
                $data['destinationCards'],
                $credential->data,
                $commerce->data['legalRepresentativeEmail']
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
