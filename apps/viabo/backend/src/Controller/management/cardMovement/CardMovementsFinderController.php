<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardMovement;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\cardMovement\application\find\CardMovementsQuery;
use Viabo\management\cardOperation\application\find\CardOperationsQuery;
use Viabo\management\credential\application\find\CardCredentialQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMovementsFinderController extends ApiController
{
    public function __invoke(string $cardId , string $initialDate , string $finalDate , Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $credentialData = $this->ask(new CardCredentialQuery($cardId));
            $cardData = $this->ask(new CardQuery($cardId));
            $operationData = $this->ask(new CardOperationsQuery($cardData->data['number'] , $initialDate , $finalDate));
            $data = $this->ask(new CardMovementsQuery(
                $cardData->data['number'] ,
                $initialDate ,
                $finalDate ,
                $credentialData->data['clientKey'] ,
                $operationData->data
            ));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}