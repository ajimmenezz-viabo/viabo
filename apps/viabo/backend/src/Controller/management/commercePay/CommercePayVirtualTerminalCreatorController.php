<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commercePay;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\create\CommercePayVirtualTerminalCommand;
use Viabo\management\commercePayCredentials\application\find\CommercePayCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\CommerceTerminalMerchantIdQuery;
use Viabo\management\commerceTransaction\application\create\CreateCommerceVirtualTerminalTransactionCommand;
use Viabo\management\commerceTransaction\application\find\CommerceTransactionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercePayVirtualTerminalCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
//            $tokenData = $this->decode($request->headers->get('Authorization'));
//            $this->validateSession();
//
//            $data = $this->opensslDecrypt($request->toArray());

            $data = $request->toArray();

            $commercePayCredentials = $this->ask(new CommercePayCredentialsQuery($data['commerceId']));

            $commercePay = $this->ask(new CommercePayVirtualTerminalCommand(
                '1aae86a4-2a22-4b81-be2b-a331d0ed4da4',
                $data['commerceId'] ,
                $data['terminalId'] ,
                $data['clientName'] ,
                $data['email'] ,
                $data['phone'] ,
                $data['description'] ,
                $data['amount']
            ));

            $terminalData = $this->ask(new CommerceTerminalMerchantIdQuery($data['terminalId']));

            $cardData = [
                'cardNumber' => $data['cardNumber'],
                'cardHolder' => $data['clientName'],
                'expMonth' => $data['expMonth'],
                'expYear' => $data['expYear'],
                'security' => $data['security']
            ];

            $this->dispatch(new CreateCommerceVirtualTerminalTransactionCommand(
                $commercePay->data ,
                $terminalData->data['merchantId'],
                $commercePayCredentials->data['apiKey'] ,
                $cardData
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
