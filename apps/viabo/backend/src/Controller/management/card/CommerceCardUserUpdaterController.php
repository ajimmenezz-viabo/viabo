<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerceUser\application\create\CreateCommerceUserCommand;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\card\application\update\UpdateCardOwnerCommand;
use Viabo\security\user\application\create\CreateUserCommand;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceCardUserUpdaterController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $this->opensslDecrypt($request->toArray());

            $cardId = $data['cardId'];
            $cardData = $this->ask(new CardQuery($cardId));

            $this->dispatch(new CreateUserCommand($data['name'] , $data['email'] , $data['phone']));
            $userData = $this->ask(new FindUserQuery('' , $data['email']));

            $userId = $userData->userData['id'];
            $this->dispatch(new CreateCommerceUserCommand($userId , $cardData->cardData['commerceId']));

            $this->dispatch(new UpdateCardOwnerCommand($cardId , $userId));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}