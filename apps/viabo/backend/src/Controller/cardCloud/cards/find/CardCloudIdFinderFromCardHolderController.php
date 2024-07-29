<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\cardCloud\cards\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\cardCloud\cards\application\find_card_id_from_cardholder\CardCloudIdQueryFromCardHolder;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardCloudIdFinderFromCardHolderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $number = $request->query->getInt('number');
            $nip = $request->query->getInt('nip');
            $date = $request->query->getAlnum('date');
            $cardDetails = $this->ask(new CardCloudIdQueryFromCardHolder($number, $nip, $date));

            return new JsonResponse($cardDetails->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
