<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\externalAccount\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\code\application\create\CreateCodeCommand;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\externalAccount\application\create\CreateExternalAccountCommand;


final readonly class ExternalAccountCreatorController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();
            $this->dispatch(new CreateExternalAccountCommand(
                $tokenData['id'],
                $data['interbankCLABE'],
                $data['beneficiary'],
                $data['rfc'],
                $data['alias'],
                $data['bank'],
                $data['email'],
                $data['phone']
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}