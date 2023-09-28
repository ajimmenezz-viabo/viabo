<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\cardMovement;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\card\application\find\MainCardsInformationQuery;
use Viabo\management\cardMovement\application\find\CardsMasterMovementsQuery;
use Viabo\management\cardOperation\application\find\CardsOperationsQuery;
use Viabo\management\commercePayCredentials\application\find\CommercePayCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\FindTerminalsQuery;
use Viabo\management\commerceTransaction\application\find\CommerceTransactionsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardsMasterMovementsFinderController extends ApiController
{
    public function __invoke(string $initialDate , string $finalDate,Request $request): Response
    {
        try {

            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $cardsInformation = $this->ask(new MainCardsInformationQuery($commerce->data['id']));
            $operationData = $this->ask(new CardsOperationsQuery($cardsInformation->data , $initialDate , $finalDate));
            $commercePayCredential = $this->ask(new CommercePayCredentialsQuery($commerce->data['id']));
            $terminalsData = $this->ask(new FindTerminalsQuery($commerce->data['id']));
            $payTransaction = $this->ask(new CommerceTransactionsQuery(
                $initialDate,
                $finalDate,
                $commercePayCredential->data,
                "",
                $terminalsData->data,
                "",
                ""
            ));
            $data = $this->ask(new CardsMasterMovementsQuery(
                $cardsInformation->data,
                $operationData->data,
                $payTransaction->data,
                $initialDate ,
                $finalDate
            ));

            return new JsonResponse($this->opensslEncrypt($data->data));

        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
