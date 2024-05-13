<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\transaction\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\transaction\application\find\TransactionsBalanceQuery;


final readonly class TransactionsBalanceController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $initialDate = $request->query->getString('initialDate');
            $endDate = $request->query->getString('endDate');
            $account = $request->query->getString('account');
            $transactionsBalance = $this->ask(new TransactionsBalanceQuery($initialDate, $endDate, $account));

            return new JsonResponse($transactionsBalance->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}