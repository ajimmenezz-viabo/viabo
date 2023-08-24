<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\commercePayCredentials\application\find\CommercePayCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\FindTerminalsQuery;
use Viabo\management\commerceTransaction\application\find\CommerceTransactionsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTransactionsAllFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $fromDate = $request->query->get('fromDate');
            $toDate = $request->query->get('toDate');
            $page = $request->query->get('page');
            $pageSize = $request->query->get('pageSize');

            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));

            $commercePayCredential = $this->ask(new CommercePayCredentialsQuery($commerce->data['id']));

            $terminalsData = $this->ask(new FindTerminalsQuery($commerce->data['id']));

            $transactions = $this->ask(new CommerceTransactionsQuery(
                $fromDate,
                $toDate,
                $commercePayCredential->data['apiKey'],
                $terminalsData->data,
                $page,
                $pageSize
            ));

            return new JsonResponse($transactions->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
