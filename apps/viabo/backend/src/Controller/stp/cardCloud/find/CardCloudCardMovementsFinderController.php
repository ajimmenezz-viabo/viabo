<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\cardCloud\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\find_card_movements\CardCloudCardMovementsQuery;

final readonly class CardCloudCardMovementsFinderController extends ApiController
{
    public function __invoke(string $cardId, Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $fromDate = $request->query->get('fromDate') ?? '';
            $toDate = $request->query->get('toDate') ?? '';
            $cardMovements = $this->ask(new CardCloudCardMovementsQuery(
                $tokenData['businessId'],
                $cardId,
                $fromDate,
                $toDate
            ));
            return new JsonResponse($cardMovements->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
