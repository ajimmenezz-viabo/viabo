<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceIdQuery;
use Viabo\management\card\application\find\PaymentProcessorsOfCommerceQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class PaymentProcessorsCommerceFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $commerceId = $this->ask(new CommerceIdQuery($tokenData['id'], $tokenData['profileId']));
            $data = $this->ask(new PaymentProcessorsOfCommerceQuery(
                $commerceId->data, $tokenData['id'], $tokenData['profileId']
            ));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}