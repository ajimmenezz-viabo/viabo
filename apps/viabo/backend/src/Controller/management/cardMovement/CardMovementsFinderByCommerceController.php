<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardMovement;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\card\application\find\AllCardsQueryByCommerce;
use Viabo\management\card\application\find\CardsQuery;
use Viabo\management\cardMovement\application\find\CardsMovementsQueryByCommerce;
use Viabo\management\cardOperation\application\find\CardsOperationsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMovementsFinderByCommerceController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $commerceId = $request->get('commerceId');
            $initialDate = $request->get('initialDate');
            $finalDate = $request->get('finalDate');
            $type = $request->get('type');
            $cards = $this->ask(new AllCardsQueryByCommerce($commerceId));
            $movements = $this->ask(new CardsMovementsQueryByCommerce(
                $cards->data,
                $initialDate ,
                $finalDate,
                $type
            ));

            return new JsonResponse($movements->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}