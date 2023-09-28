<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\cardMovement;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\catalogs\threshold\application\find\AnchoringOrderThresholdQuery;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\cardMovement\application\find\UnreconciledMasterCardMovementsQuery;
use Viabo\management\cardOperation\application\find\CardOperationsQuery;
use Viabo\management\conciliation\application\find\AnchoringOrderQuery;
use Viabo\management\conciliation\application\find\FinishedConciliationQuery;
use Viabo\management\credential\application\find\CardCredentialQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class UnreconciledMasterCardMovementsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $anchoringOrderId = $request->get('anchoringOrderId');

            $anchoringOrder = $this->ask(new AnchoringOrderQuery($anchoringOrderId));
            $anchoringOrderAmount = $anchoringOrder->data['amount'];
            $cardId = $anchoringOrder->data['cardId'];
            $anchoringOrderRegisterDate = $anchoringOrder->data['registerDate'];

            $credentialData = $this->ask(new CardCredentialQuery($cardId));
            $cardData = $this->ask(new CardQuery($cardId));
            $cardOperations = $this->ask(new CardOperationsQuery($cardData->data['number'] , $anchoringOrderRegisterDate));
            $threshold = $this->ask(new AnchoringOrderThresholdQuery());
            $conciliation = $this->ask(new FinishedConciliationQuery($cardId));

            $movements = $this->ask(new UnreconciledMasterCardMovementsQuery(
                $cardData->data['number'] ,
                $anchoringOrderAmount ,
                $anchoringOrderRegisterDate ,
                $credentialData->data['clientKey'] ,
                $threshold->data['value'] ,
                $conciliation->data ,
                $cardOperations->data
            ));

            return new JsonResponse($this->opensslEncrypt($movements->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
