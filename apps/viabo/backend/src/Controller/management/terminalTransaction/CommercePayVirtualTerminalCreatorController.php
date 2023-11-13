<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\terminalTransaction;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePayCredentials\application\find\PayServiceCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\CommerceTerminalMerchantIdQuery;
use Viabo\management\terminalTransaction\application\create\CommercePayVirtualTerminalCommand;
use Viabo\management\terminalTransactionLog\application\create\CreateCommerceVirtualTerminalTransactionCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercePayVirtualTerminalCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $this->opensslDecrypt($request->toArray());
            $commercePayCredentials = $this->ask(new PayServiceCredentialsQuery($data['commerceId']));
            $commercePay = $this->ask(new CommercePayVirtualTerminalCommand(
                $tokenData['id'] ,
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
