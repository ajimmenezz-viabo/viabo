<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\cardCloud\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\find_card_details\CardCloudCardDetailsQuery;

final readonly class CardCloudCardDetailsFinderController extends ApiController
{

    public function __invoke(string $cardId, Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $cardDetails = $this->ask(new CardCloudCardDetailsQuery(
                $tokenData['businessId'],
                $cardId
            ));
            return new JsonResponse($cardDetails->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
