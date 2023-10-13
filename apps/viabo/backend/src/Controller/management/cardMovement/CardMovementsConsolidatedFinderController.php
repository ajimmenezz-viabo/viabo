<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\cardMovement;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\cardMovement\application\find\CardMovementsConsolidatedQuery;
use Viabo\management\commerceTerminal\application\find\FindTerminalSpeiCardQuery;
use Viabo\management\terminalConsolidation\application\find\TerminalConsolidationTransactionsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMovementsConsolidatedFinderController extends ApiController
{
    public function __invoke(string $terminalId , string $initialDate , Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $speiCard = $this->ask(new FindTerminalSpeiCardQuery($terminalId));
            $movementsConsolidated = $this->ask(new TerminalConsolidationTransactionsQuery(
                $commerce->data['id'] ,
                $terminalId
            ));
            $movements = $this->ask(new CardMovementsConsolidatedQuery(
                $speiCard->data,
                $initialDate ,
                $movementsConsolidated->data
            ));

            return new JsonResponse($this->opensslEncrypt($movements->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
