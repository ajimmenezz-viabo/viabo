<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\business\commerce;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommercesAffiliatesQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceAffiliatesFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $data = $this->ask(new CommercesAffiliatesQuery());

            return new JsonResponse($data->commerces);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}