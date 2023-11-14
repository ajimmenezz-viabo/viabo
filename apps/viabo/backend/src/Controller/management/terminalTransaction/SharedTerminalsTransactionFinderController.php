<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\terminalTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\commercePayCredentials\application\find\PayServiceCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\TerminalsQuery;
use Viabo\management\terminalTransaction\application\find\SharedTerminalsTransactionsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class SharedTerminalsTransactionFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $startDate = $request->query->get('startDate');
            $endDate = $request->query->get('endDate');
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $credentials = $this->ask(new PayServiceCredentialsQuery($commerce->data['id']));
            $terminals = $this->ask(new TerminalsQuery($commerce->data['id']));
            $transactions = $this->ask(new SharedTerminalsTransactionsQuery(
                $commerce->data['id'],
                $credentials->data['apiKey'],
                $terminals->data ,
                $startDate ,
                $endDate ,
            ));

            return new JsonResponse($transactions->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
