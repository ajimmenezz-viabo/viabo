<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\FindCommerceQuery;
use Viabo\management\card\application\find\CardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $commerceId = '';
            $commerce = $this->ask(new FindCommerceQuery($commerceId , $tokenData['id']));
            $cards = $this->ask(new CardsQuery($commerce->data['id']));

            return new JsonResponse($this->opensslEncrypt($cards->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}