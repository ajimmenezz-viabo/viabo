<?php declare(strict_types=1);


namespace Viabo\business\documents\application\create;


use Viabo\business\documents\domain\Document;
use Viabo\business\documents\domain\DocumentName;
use Viabo\business\documents\domain\DocumentRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class DocumentsCreator
{
    public function __construct(private DocumentRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(CommerceId $commerceId , array $uploadDocuments): void
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