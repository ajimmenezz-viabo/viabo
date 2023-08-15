<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\commercePayCredentials\application\find\CommercePayCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\CommerceTerminalMerchantIdQuery;
use Viabo\management\commerceTransaction\application\find\CommerceTransactionsTerminalQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTransactionsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $fromDate = $request->query->get('fromDate');
            $toDate = $request->query->get('toDate');
            $terminalId = $request->query->get('terminalId');
            $page = $request->query->get('page');
            $pageSize = $request->query->get('pageSize');

            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));

            $commercePayCredential = $this->ask(new CommercePayCredentialsQuery($commerce->data['id']));

            $terminalData = $this->ask(new CommerceTerminalMerchantIdQuery($terminalId));

            $transactions = $this->ask(new CommerceTransactionsTerminalQuery(
                $fromDate,
                $toDate,
                $terminalData->data['merchantId'],
                $terminalId,
                $commercePayCredential->data['apiKey'],
                $page,
                $pageSize
            ));

            return new JsonResponse($transactions->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
