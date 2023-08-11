<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commercePay;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\create\CommercePayVirtualTerminalCommand;
use Viabo\management\commercePayCredentials\application\find\CommercePayCredentialsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercePayVirtualTerminalCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $data = $this->opensslDecrypt($request->toArray());

            $commercePayCredentials = $this->ask(new CommercePayCredentialsQuery($data['commerceId']));


            $this->dispatch(new CommercePayVirtualTerminalCommand(
                $tokenData['id'],
                $data['commerceId'] ,
                $data['terminalId'] ,
                $data['amount'],
                $data['description'],
                $data['cardNumber'] ,
                $data['expMonth'] ,
                $data['expYear'] ,
                $data['security'] ,
                $data['clientName'] ,
                $data['email'] ,
                $data['phone'],
                $commercePayCredentials->data['merchantId'] ,
                $commercePayCredentials->data['apiKey'] ,
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
