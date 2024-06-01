<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\cardCloud\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\find_sub_account_cards\CardCloudSubAccountCardsQuery;

final readonly class CardCloudSubAccountCardsFinderController extends ApiController
{

    public function __invoke(string $subAccountId, Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $cardCloudCards = $this->ask(new CardCloudSubAccountCardsQuery(
                $tokenData['businessId'],
                $subAccountId
            ));
            return new JsonResponse($cardCloudCards->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
