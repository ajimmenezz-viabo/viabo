<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\terminalTransactionLog;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePayCredentials\application\find\PayServiceCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\CommerceTerminalMerchantIdQuery;
use Viabo\management\terminalTransaction\application\find\CommercePayQuery;
use Viabo\management\terminalTransactionLog\application\create\CreateCommercePayTransactionCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTransactionCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $data = $this->opensslDecrypt($request->toArray());
            $commercePay = $this->ask(new CommercePayQuery($data['payId']));
            $commercePayCredentials = $this->ask(new PayServiceCredentialsQuery($commercePay->data['commerceId']));
            $terminalData = $this->ask(new CommerceTerminalMerchantIdQuery($commercePay->data['terminalId']));
            $this->dispatch(new CreateCommercePayTransactionCommand(
                $commercePay->data ,
                $terminalData->data['merchantId'],
                $commercePayCredentials->data['apiKey'] ,
                $data
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}