<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\security\user\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\find_card_cloud_owners\CardCloudOwnersQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardCloudOwnersFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $cardCloudOwners = $this->ask(new CardCloudOwnersQuery($tokenData['businessId']));

            return new JsonResponse($cardCloudOwners->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
