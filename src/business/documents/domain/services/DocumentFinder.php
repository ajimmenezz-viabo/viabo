<?php declare(strict_types=1);


namespace Viabo\business\documents\domain\services;


use Viabo\management\documentAuthorization\domain\exceptions\DocumentNotExist;
use Viabo\business\documents\domain\Document;
use Viabo\business\documents\domain\DocumentRepository;
use Viabo\business\shared\domain\documents\DocumentId;

final readonly class DocumentFinder
{
    public function __construct(private DocumentRepository $repository)
    {
    }

    public function __invoke(DocumentId $documentId): Document
    {
        $document = $this->repository->search($documentId);

        if (empty($document)) {
            throw new DocumentNotExist();
        }

        return $document;
    }

}