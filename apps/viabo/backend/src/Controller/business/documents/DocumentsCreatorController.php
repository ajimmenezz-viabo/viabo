<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\business\documents;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\documents\application\create\CreateDocumentsCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class DocumentsCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $uploadDocuments = $request->files->all();
            $commerceId = $request->request->get('commerceId');
            $this->dispatch(new CreateDocumentsCommand($tokenData['id'] , $commerceId , $uploadDocuments));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}