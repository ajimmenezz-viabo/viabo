<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\webhook;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\webhook\application\register\RegisterPaysCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class PaymentRecorderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $token = $request->headers->get('Authorization');
            $pays = $request->toArray();
            $this->dispatch(new RegisterPaysCommand($token, $pays));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}