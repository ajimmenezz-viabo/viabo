<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\terminalTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\commercePayCredentials\application\find\PayServiceCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\TerminalsQuery;
use Viabo\management\terminalConsolidation\application\find\TerminalConciliationsQuery;
use Viabo\management\terminalTransaction\application\find\TerminalsTransactionsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class TerminalsTransactionFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $startDate = $request->query->get('fromDate');
            $endDate = $request->query->get('toDate');
            $terminalId = $request->query->getString('terminalId');
            $page = $request->query->get('page');
            $pageSize = $request->query->get('pageSize');
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $credentials = $this->ask(new PayServiceCredentialsQuery($commerce->data['id']));
            $terminals = $this->ask(new TerminalsQuery($commerce->data['id']));
            $conciliations = $this->ask(new TerminalConciliationsQuery($terminals->data , $terminalId));
            $transactions = $this->ask(new TerminalsTransactionsQuery(
                $commerce->data['id'],
                $credentials->data['apiKey'] ,
                $terminalId ,
                $terminals->data ,
                $conciliations->data ,
                $startDate ,
                $endDate ,
                $page ,
                $pageSize ,
            ));

            return new JsonResponse($transactions->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
