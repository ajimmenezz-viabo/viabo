<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\find\FindCommercePayQuery;
use Viabo\management\commercePayCredentials\application\find\FindCommercePayCredentialsQuery;
use Viabo\management\commerceTransaction\application\transaction\CommercePayTransactionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTransactionCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {

            $data = $request->toArray();

            $commercePay = $this->ask(new FindCommercePayQuery($data['urlCode']));
            $commercePayData = $commercePay->data;
            $transaction = $this->ask(new CommercePayTransactionQuery(
                $data['cardNumber'],
                $data['expMonth'],
                $data['expYear'],
                $data['security'],
                $data['cardHolder'],
                '1683',
                $commercePayData
            ));

            $this->dispatch(new CreatorCommercePayTransactionCommand(
                $commercePayData['id'],
                $transaction->data
            ));


            return new JsonResponse($transaction->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
