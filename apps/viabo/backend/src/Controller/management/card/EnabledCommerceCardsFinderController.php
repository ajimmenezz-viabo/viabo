<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\management\card\application\find\EnabledCommerceCardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class EnabledCommerceCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $paymentProcessorId = $request->get('paymentProcessorId');

            $data = $this->ask(new CommerceQuery($tokenData['id']));
            $data = $this->ask(new EnabledCommerceCardsQuery(
                $data->commerce['id'] , $tokenData['id'] , $tokenData['profileId'], $paymentProcessorId
            ));

            return new JsonResponse($this->opensslEncrypt($data->commerceCards));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}