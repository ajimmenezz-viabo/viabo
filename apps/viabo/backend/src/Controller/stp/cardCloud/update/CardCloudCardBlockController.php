<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\cardCloud\update;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\update_card_block_status\CardCloudCardBlockStatusUpdaterQuery;

final readonly class CardCloudCardBlockController extends ApiController
{

    public function __invoke(string $cardId, string $blockStatus, Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $cardSensitive = $this->ask(new CardCloudCardBlockStatusUpdaterQuery(
                $tokenData['businessId'],
                $cardId,
                $blockStatus
            ));
            return new JsonResponse($cardSensitive->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
