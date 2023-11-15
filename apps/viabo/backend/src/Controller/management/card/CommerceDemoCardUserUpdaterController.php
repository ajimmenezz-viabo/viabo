<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerceUser\application\create\CreateCommerceUserCommand;
use Viabo\management\card\application\update\UpdateCardDemoCommand;
use Viabo\management\card\application\update\UpdateCardOwnerCommand;
use Viabo\security\user\application\update\SendUserPasswordCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceDemoCardUserUpdaterController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $this->opensslDecrypt($request->toArray());
            $cardId = [['id' => $tokenData['cardId'] , 'cvv' => $data['cvv']]];
            $this->dispatch(new UpdateCardDemoCommand($tokenData['cardId'] , $data['cvv'] , $data['expiration']));
            $this->dispatch(new CreateCommerceUserCommand($tokenData['id'] , $cardId));
            $this->dispatch(new UpdateCardOwnerCommand($cardId , $tokenData['id']));
            $this->dispatch(new SendUserPasswordCommand($tokenData['id']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
