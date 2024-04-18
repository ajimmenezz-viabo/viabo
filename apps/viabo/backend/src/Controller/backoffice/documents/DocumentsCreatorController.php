<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\backoffice\documents;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\documents\application\create\CreateDocumentsCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class DocumentsCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            
            $uploadDocuments = $request->files->all();
            $companyId = $request->request->get('commerceId');
            $this->dispatch(new CreateDocumentsCommand($companyId , $uploadDocuments));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}