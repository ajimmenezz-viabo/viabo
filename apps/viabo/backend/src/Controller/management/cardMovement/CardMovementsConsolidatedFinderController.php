<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\cardMovement;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\cardMovement\application\find\CardMovementsConsolidatedQuery;
use Viabo\management\commerceTerminal\application\find\TerminalQueryBySpeiCard;
use Viabo\management\terminalConsolidation\application\find\TerminalConciliationsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMovementsConsolidatedFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $terminalId = $request->query->getString('terminalId');
            $startDate = $request->query->getString('startDate');
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $terminal = $this->ask(new TerminalQueryBySpeiCard($terminalId));
            $card = $this->ask(new CardQuery($terminal->data['cardId'] ?? ''));
            $movementsConsolidated = $this->ask(new TerminalConciliationsQuery(
                $commerce->data['id'] ,
                $terminalId
            ));
            $movements = $this->ask(new CardMovementsConsolidatedQuery(
                $card->data ,
                $startDate ,
                $movementsConsolidated->data
            ));

            return new JsonResponse($this->opensslEncrypt($movements->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
