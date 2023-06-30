<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerceUser\application\create\CreateCommerceUserCommand;
use Viabo\management\card\application\find\CardDemoQuery;
use Viabo\management\card\application\find\CardInformationQuery;
use Viabo\management\card\application\find\CardQuery;
use Viabo\management\card\application\update\UpdateCardOwnerCommand;
use Viabo\security\user\application\create\CreateUserCommand;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceDemoCardUserUpdaterController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $this->opensslDecrypt($request->toArray());
            $card = $this->ask(new CardDemoQuery($data['cardNumber'] , $data['cvv'] , $data['expiration']));
            $this->dispatch(new CreateCommerceUserCommand($tokenData['id'] , $card->cardData));
            $this->dispatch(new UpdateCardOwnerCommand($card->cardData , $tokenData['id']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}