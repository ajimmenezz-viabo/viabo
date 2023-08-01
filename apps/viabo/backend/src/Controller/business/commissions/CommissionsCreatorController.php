<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\business\commissions;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commission\application\create\CreateCommissionsCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommissionsCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $request->toArray();
            $this->dispatch(new CreateCommissionsCommand(
                $tokenData['id'],
                $data['commerceId'],
                $data['speiInCarnet'],
                $data['speiInMasterCard'],
                $data['speiOutCarnet'],
                $data['speiOutMasterCard'],
                $data['pay']
            ));
            $this->validateSession();

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}