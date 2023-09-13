<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\conciliation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\conciliation\application\create\CreateConciliationCommand;
use Viabo\security\api\application\find\ApiQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class ConciliationCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $request->toArray();
            $payCash = $this->ask(new ApiQuery('Pay_Cash'));
            $payCashInstructions = $this->ask(new ApiQuery('Pay_Cash_Instructions'));
            $card = $this->ask(new CardQuery($data['cardId']));
            $conciliation = $this->ask(new CreateConciliationCommand(
                $data['cardId'] ,
                $card->data['number'] ,
                $data['amount'] ,
                $data['emails'] ,
                $data['spei'] ,
                $data['payCash'] ,
                $payCash->data,
                $payCashInstructions->data
            ));

            return new JsonResponse($this->opensslEncrypt($conciliation->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}