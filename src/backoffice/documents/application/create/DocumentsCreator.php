<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\application\create;


use Viabo\backoffice\documents\domain\Document;
use Viabo\backoffice\documents\domain\DocumentName;
use Viabo\backoffice\documents\domain\DocumentRepository;
use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\backoffice\shared\domain\commerce\CompanyLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class DocumentsCreator
{
    public function __construct(private DocumentRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(CompanyId $commerceId , array $uploadDocuments): void
    {
        foreach ($uploadDocuments as $documentName => $uploadDocument) {
            $name = DocumentName::create($documentName);
            $this->repository->deleteBy($commerceId , $name);

            $document = Document::create($commerceId , $name);
            $this->repository->save($document , $uploadDocument);

            $this->bus->publish(...$document->pullDomainEvents());
        }
    }
}