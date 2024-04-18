<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\application\create;


use Viabo\backoffice\documents\domain\Document;
use Viabo\backoffice\documents\domain\DocumentRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class DocumentsCreator
{
    public function __construct(private DocumentRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(string $companyId, array $uploadDocuments): void
    {
        foreach ($uploadDocuments as $documentName => $uploadDocument) {
            $document = Document::create($companyId, $documentName);
            $this->repository->deleteBy($companyId, $documentName);
            $this->repository->save($document, $uploadDocument);

            $this->bus->publish(...$document->pullDomainEvents());
        }
    }
}