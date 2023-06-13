<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\notifications;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\notifications\application\SendCardMessages\CardMessagesSendCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CardMessagesSendController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $this->opensslDecrypt($request->toArray());
            $this->dispatch(new CardMessagesSendCommand($data['subject'] , $data['emails'] , $data['message']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
