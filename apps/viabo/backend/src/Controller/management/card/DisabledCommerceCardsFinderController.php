<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\FindCommerceQuery;
use Viabo\management\card\application\find\EnabledCommerceCardsQuery;
use Viabo\management\card\application\find\DisabledCommerceCardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class DisabledCommerceCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $commerceId = '';
            $data = $this->ask(new FindCommerceQuery($commerceId , $tokenData['id']));
            $data = $this->ask(new DisabledCommerceCardsQuery($data->commerce['id']));

            return new JsonResponse($this->opensslEncrypt($data->commerceCards));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}