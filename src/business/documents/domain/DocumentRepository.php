<?php declare(strict_types=1);


namespace Viabo\business\documents\domain;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\documents\DocumentId;
use Viabo\shared\domain\criteria\Criteria;

interface DocumentRepository
{
    public function save(Document $document , $uploadDocument): void;

    public function search(DocumentId $documentId): Document|null;

    public function searchCriteria(Criteria $criteria): array;

    public function deleteBy(CommerceId $commerceId , DocumentName $name): void;

    public function delete(Document $document): void;
}