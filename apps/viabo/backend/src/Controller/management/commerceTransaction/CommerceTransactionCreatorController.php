<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\find\FindCommercePayQuery;
use Viabo\management\commerceTransaction\application\transaction\CommercePayTransactionCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTransactionCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {

            $data = $request->toArray();

            $commercePay = $this->ask(new FindCommercePayQuery($data['urlCode']));

            $this->dispatch(new CommercePayTransactionCommand(
                $data['cardNumber'],
                $data['expMonth'],
                $data['expYear'],
                $data['security'],
                $data['cardHolder'],
                $commercePay->data
            ));


            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
