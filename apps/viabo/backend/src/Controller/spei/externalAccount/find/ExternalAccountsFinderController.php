<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\externalAccount\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\externalAccount\application\find\ExternalAccountsQuery;


final readonly class ExternalAccountsFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $externalAccounts = $this->ask(new ExternalAccountsQuery());

            return new JsonResponse($externalAccounts->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}