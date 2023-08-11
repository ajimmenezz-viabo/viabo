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
            $api = $this->ask(new ApiQuery('Pay_Cash'));
            $card = $this->ask(new CardQuery($data['cardId']));
            $data = $this->ask(new CreateConciliationCommand(
                $data['cardId'] ,
                $card->data['number'] ,
                $data['amount'] ,
                $data['emails'] ,
                $data['spei'] ,
                $data['payCash'] ,
                $api->data
            ));

            return new JsonResponse($data->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}