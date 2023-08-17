<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\business\commerceUser\application\find\CommerceQueryByUser;
use Viabo\management\card\application\find\EnabledCardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class EnabledCommerceCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $paymentProcessorId = $request->get('paymentProcessorId');
            $userId = $tokenData['id'];

            $commerceId = $this->getCommerceId($userId);
            $data = $this->ask(new EnabledCardsQuery(
                $commerceId , $userId , $tokenData['profileId'] , $paymentProcessorId
            ));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }

    private function getCommerceId(string $userId): string
    {
        try {
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($userId));
            return $commerce->data['id'];
        } catch (\DomainException) {
            $commerce = $this->ask(new CommerceQueryByUser($userId));
            return $commerce->data['commerceId'];
        }
    }
}