<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\conciliation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\card\application\find\CardsQuery;
use Viabo\management\card\application\find\MainCardIdQuery;
use Viabo\management\card\application\find\MastersCardsQueryByCommerce;
use Viabo\management\conciliation\application\find\AnchoringOrdersQueryByCards;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class AnchoringOrdersFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $cards = $this->ask(new MastersCardsQueryByCommerce($commerce->data['id']));
            $anchoringOrders = $this->ask(new AnchoringOrdersQueryByCards($cards->data));

            return new JsonResponse($anchoringOrders->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}