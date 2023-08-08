<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTerminal;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\management\commercePayCredentials\application\find\FindCommercePayCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\FindTerminalsCommercePayQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTerminalsPayFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $commerce = $this->ask(new CommerceQuery($tokenData['id']));
            $commerceData =  $commerce->data;
            $commercePayCredential = $this->ask(new FindCommercePayCredentialsQuery($commerceData['id']));
            $commercePayCredentialData = $commercePayCredential->data;
            $data = $this->ask(new FindTerminalsCommercePayQuery($commercePayCredentialData['merchantId'],$commercePayCredentialData['apiKey']));
            return new JsonResponse($data->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
