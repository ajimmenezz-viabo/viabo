<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\externalAccount\delete;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\externalAccount\application\delete\DisableExternalAccountCommand;


final readonly class ExternalAccountDisablerController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();
            $this->dispatch(new DisableExternalAccountCommand($tokenData['id'] , $data['externalAccountId']));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}