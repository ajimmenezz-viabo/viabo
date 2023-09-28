<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\cardMovement;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\cardMovement\application\find\CardMovementsConsolidatedQuery;
use Viabo\management\commerceTerminal\application\find\TerminalSpeiCardsQuery;
use Viabo\management\terminalConsolidation\application\find\TerminalConsolidationQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMovementsConsolidatedFinderController extends ApiController
{
    public function __invoke(string $initialDate , string $finalDate , Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $speiCards = $this->ask(new TerminalSpeiCardsQuery($commerce->data['id']));
            $movementsConsolitaded = $this->ask(new TerminalConsolidationQuery($commerce->data['id']));

            $data = $this->ask(new CardMovementsConsolidatedQuery(
                $speiCards->data,
                $initialDate ,
                $finalDate ,
                $movementsConsolitaded->data
            ));
            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
