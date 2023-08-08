<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commercePay;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\create\CreateCommercePayCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercePayCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $this->opensslDecrypt($request->toArray());
            $code = $this->ask(new CreateCommercePayCommand(
                $tokenData['id'] ,
                $data['commerceId'] ,
                $data['terminalId'] ,
                $data['clientName'] ,
                $data['email'] ,
                $data['phone'] ,
                $data['description'] ,
                $data['amount']
            ));

            return new JsonResponse($code->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
