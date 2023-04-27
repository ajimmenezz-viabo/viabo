<?php declare(strict_types=1);


namespace Viabo\business\documents\application\find;


use Viabo\business\shared\domain\documents\DocumentId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindDocumentQueryHandler implements QueryHandler
{
    public function __construct(private DocumentFinder $finder)
    {
    }

    public function __invoke(FindDocumentQuery $query): Response
    {
        $documentId = new DocumentId($query->documentId);

        return $this->finder->__invoke($documentId);
    }
}