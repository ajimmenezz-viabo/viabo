<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\cardCloud\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\find_card_details\CardCloudCardDetailsQuery;
use Viabo\stp\users\application\find_user_by_card\CardCloudUserQuery;

final readonly class CardCloudCardDetailsFinderController extends ApiController
{

    public function __invoke(string $cardId, Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $user = $this->ask(new CardCloudUserQuery($cardId));
            $cardDetails = $this->ask(new CardCloudCardDetailsQuery(
                $tokenData['businessId'],
                $cardId,
                $user->data
            ));

            return new JsonResponse($cardDetails->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
