<?php declare(strict_types=1);


namespace Viabo\business\documents\domain;


use Viabo\business\shared\domain\commerce\CommerceId;

interface DocumentRepository
{
    public function save(Document $document , $uploadDocument): void;

    public function deleteBy(CommerceId $commerceId , DocumentName $name): void;
}