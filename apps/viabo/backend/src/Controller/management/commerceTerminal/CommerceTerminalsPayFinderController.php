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
            //$tokenData = $this->decode($request->headers->get('Authorization'));
            //$this->validateSession();

            //$commerce = $this->ask(new CommerceQuery('1aae86a4-2a22-4b81-be2b-a331d0ed4da4'));
            //$commerceData =  $commerce->data();
            $commercePayCredential = $this->ask(new FindCommercePayCredentialsQuery('17ea6538-f2df-4700-9180-457fc0d4ed3c'));
            $commercePayCredentialData = $commercePayCredential->data;
//            var_dump($commercePayCredentialData);
            $data = $this->ask(new FindTerminalsCommercePayQuery($commercePayCredentialData['merchantId'],$commercePayCredentialData['apiKey']));
            return new JsonResponse($data->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
