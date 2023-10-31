<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\cardMovement;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\card\application\find\AllCardsQueryByCommerce;
use Viabo\management\cardMovement\application\find\CardsMovementsQueryByCommerce;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMovementsFinderByCommerceController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $commerceId = $request->query->getString('commerceId');
            $startDate = $request->query->getString('startDate');
            $endDate = $request->query->getString('endDate');
            $type = $request->query->getString('type');
            $cards = $this->ask(new AllCardsQueryByCommerce($commerceId));
            $movements = $this->ask(new CardsMovementsQueryByCommerce(
                $cards->data ,
                $startDate ,
                $endDate ,
                $type
            ));

            return new JsonResponse($this->opensslEncrypt($movements->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}