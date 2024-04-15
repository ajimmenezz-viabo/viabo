<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\cardMovement;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find_company_by_user\CompanyQueryByUser;
use Viabo\management\card\application\find\MainCardsInformationQuery;
use Viabo\management\cardMovement\application\find\CardsMasterMovementsQuery;
use Viabo\management\cardOperation\application\find\CardsOperationsQuery;
use Viabo\management\commercePayCredentials\application\find\PayServiceCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\TerminalsQuery;
use Viabo\management\terminalTransaction\application\find\TerminalsTransactionsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardsMasterMovementsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $startDate = $request->query->getString('startDate');
            $endDate = $request->query->getString('endDate');
            $commerce = $this->ask(new CompanyQueryByUser($tokenData['id']));
            $cardsInformation = $this->ask(new MainCardsInformationQuery($commerce->data['id']));
            $operationData = $this->ask(new CardsOperationsQuery($cardsInformation->data , $startDate , $endDate));
            $commercePayCredential = $this->ask(new PayServiceCredentialsQuery($commerce->data['id']));
            $terminalsData = $this->ask(new TerminalsQuery($commerce->data['id'] , []));
            $payTransaction = $this->ask(new TerminalsTransactionsQuery(
                $commerce->data['id'],
                $commercePayCredential->data['apiKey'] ,
                "" ,
                $terminalsData->data ,
                [] ,
                $startDate ,
                $endDate ,
                "" ,
                ""
            ));
            $movements = $this->ask(new CardsMasterMovementsQuery(
                $cardsInformation->data ,
                $operationData->data ,
                $payTransaction->data ,
                $startDate ,
                $endDate
            ));

            return new JsonResponse($this->opensslEncrypt($movements->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
