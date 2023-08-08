<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commercePay;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\create\CreateCommercePayCommand;
use Viabo\management\commercePay\application\find\FindCommercePayUrlCodeQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercePayCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $this->opensslDecrypt($request->toArray());
            $this->dispatch(new CreateCommercePayCommand(
                $tokenData['id'],
                $data['referenceId'],
                $data['commerceId'],
                $data['terminalId'],
                $data['fullName'],
                $data['email'],
                $data['phone'],
                $data['description'],
                $data['amount']
            ));

            $commercePayUrlCode = $this->ask(new FindCommercePayUrlCodeQuery($data['referenceId']));

            return new JsonResponse($commercePayUrlCode->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
