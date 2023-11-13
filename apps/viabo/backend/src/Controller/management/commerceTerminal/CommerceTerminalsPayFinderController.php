<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTerminal;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\commercePayCredentials\application\find\PayServiceCredentialsQuery;
use Viabo\management\commerceTerminal\application\find\FindTerminalsCommercePayQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTerminalsPayFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $commerceData =  $commerce->data;
            $commercePayCredential = $this->ask(new PayServiceCredentialsQuery($commerceData['id']));
            $commercePayCredentialData = $commercePayCredential->data;
            $terminals = $this->ask(new FindTerminalsCommercePayQuery(
                $commercePayCredentialData['merchantId'] ,
                $commercePayCredentialData['apiKey']
            ));

            return new JsonResponse($terminals->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
