<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardOperation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\management\card\application\find\CardsCommerceQuery;
use Viabo\management\cardOperation\application\find\BalanceInTransactionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardTransactionsFinderOnCommerceController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $paymentProcessorId = $request->get('paymentProcessorId');

            $commerce = $this->ask(new CommerceQuery($tokenData['id']));
            $cards = $this->ask(new CardsCommerceQuery($commerce->commerce['id'] , $paymentProcessorId));
            $balanceInTransaction = $this->ask(new BalanceInTransactionQuery($cards->data));

            return new JsonResponse($balanceInTransaction->total);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}