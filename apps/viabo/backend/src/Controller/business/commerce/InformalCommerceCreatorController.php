<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\business\commerce;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\create\CreateInformalCommerceCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class InformalCommerceCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $this->dispatch(new CreateInformalCommerceCommand($data['commerceName']));
            $this->validateSession();

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}