<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\stpAccount\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\stpAccount\application\find\ConcentratorQuery;


final readonly class ConcentratorFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $stpAccounts = $this->ask(new ConcentratorQuery($tokenData['businessId']));

            return new JsonResponse($stpAccounts->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

}