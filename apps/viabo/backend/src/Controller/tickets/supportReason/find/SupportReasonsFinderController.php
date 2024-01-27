<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\tickets\supportReason\find;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\tickets\supportReason\application\find\SupportReasonsQuery;

final readonly class SupportReasonsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $supportReasons = $this->ask(new SupportReasonsQuery());

            return new JsonResponse($supportReasons->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}