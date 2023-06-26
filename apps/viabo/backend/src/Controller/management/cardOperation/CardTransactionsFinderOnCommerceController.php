<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardOperation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\card\application\find\CardsCommerceQuery;
use Viabo\management\cardOperation\application\find\BalanceInTransactionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardTransactionsFinderOnCommerceController extends ApiController
{
    public function __invoke(string $commerceId , Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $cards = $this->ask(new CardsCommerceQuery($commerceId));
            $balanceInTransaction = $this->ask(new BalanceInTransactionQuery($cards->data));

            return new JsonResponse($balanceInTransaction->total);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}