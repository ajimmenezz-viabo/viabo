<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\FindCommerceQuery;
use Viabo\management\card\application\find\CommerceCardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));

            $commerceId = '';
            $data = $this->ask(new FindCommerceQuery($commerceId , $tokenData['id']));
            $data = $this->ask(new CommerceCardsQuery($data->commerce['id']));

            return new JsonResponse($this->opensslEncrypt($data->commerceCards));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}