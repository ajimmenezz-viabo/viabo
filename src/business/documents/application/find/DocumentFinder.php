<?php declare(strict_types=1);


namespace Viabo\business\documents\application\find;


use Viabo\business\documents\domain\services\DocumentFinder as DocumentFinderService;
use Viabo\business\shared\domain\documents\DocumentId;

final readonly class DocumentFinder
{
    public function __construct(private DocumentFinderService $finder)
    {
    }

    public function __invoke(DocumentId $documentId): DocumentResponse
    {
        $document = $this->finder->__invoke($documentId);

        return new DocumentResponse($document->toArray());
    }


}