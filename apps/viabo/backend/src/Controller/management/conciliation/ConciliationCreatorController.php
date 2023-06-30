<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\conciliation;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\conciliation\application\create\CreateConciliationQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class ConciliationCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $request->toArray();
            $data = $this->ask(new CreateConciliationQuery(
                $data['cardId'] , $data['amount'] , $data['spei'] , $data['emails']
            ));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}