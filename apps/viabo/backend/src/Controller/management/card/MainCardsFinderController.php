<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\card;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\card\application\find\CardsMasterGlobalQuery;
use Viabo\management\card\application\find\CardsNumberQuery;
use Viabo\management\card\application\find\MainCardsInformationQuery;
use Viabo\management\cardOperation\application\find\BalanceInTransactionQuery;
use Viabo\management\cardOperation\application\find\BalanceMasterInTransactionQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class MainCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $cardsInformation = $this->ask(new MainCardsInformationQuery($commerce->data['id']));
            $cards = $this->ask(new CardsNumberQuery($commerce->data['id']));
            $masterBalanceInTransaction = $this->ask(new BalanceMasterInTransactionQuery($cards->data));
            $data = $this->ask(new CardsMasterGlobalQuery($cardsInformation->data, $masterBalanceInTransaction->data));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
