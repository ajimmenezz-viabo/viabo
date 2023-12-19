<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\fundingOrder;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\card\application\find\CardQueryBySpei;
use Viabo\management\commerceTerminal\application\find\TerminalQuery;
use Viabo\management\fundingOrder\application\create\CreateFundingOrderCommand;
use Viabo\management\fundingOrder\application\find\FundingOrderQuery;
use Viabo\management\notifications\application\SendFundingOrder\SendFundingOrderCommand;
use Viabo\management\notifications\application\SendFundingOrder\SendNotificationFundingOrderCommand;
use Viabo\security\api\application\find\ApiQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class FundingOrderCreatorBySlugController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $request = $request->toArray();
            $terminal = $this->ask(new TerminalQuery($request['terminalId']));
            $card = $this->ask(new CardQueryBySpei($terminal->data['speiCard']));
            $payCash = $this->ask(new ApiQuery('Pay_Cash'));
            $payCashInstructions = $this->ask(new ApiQuery('Pay_Cash_Instructions'));
            $fundingOrderId = $this->generateUuid();
            $emptySpei = '';
            $payCashActive = '1';
            $this->dispatch(new CreateFundingOrderCommand(
                $fundingOrderId ,
                $card->data['id'] ,
                $card->data['number'] ,
                $request['amount'] ,
                $emptySpei ,
                $payCashActive ,
                $payCash->data ,
                $payCashInstructions->data
            ));
            $fundingOrder = $this->ask(new FundingOrderQuery($fundingOrderId));
            $this->dispatch(new SendFundingOrderCommand($fundingOrder->data , $request['email']));

            return new JsonResponse($fundingOrder->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}