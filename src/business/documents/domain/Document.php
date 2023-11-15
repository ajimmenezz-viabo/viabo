<?php declare(strict_types=1);


namespace Viabo\business\documents\domain;


use Viabo\business\documents\domain\events\DocumentCreatedDomainEvent;
use Viabo\business\documents\domain\events\DocumentDeletedDomainEvent;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\documents\DocumentId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final  class Document extends AggregateRoot
{
    public function __construct(
        private DocumentId        $id ,
        private CommerceId        $commerceId ,
        private DocumentName      $name ,
        private DocumentStorePath $storePath ,
        private DocumentRegister  $register
    )
    {
    }

    public static function create(CommerceId $commerceId , DocumentName $name): Document
    {
        $document = new self(
            DocumentId::random() ,
            $commerceId ,
            $name ,
            new DocumentStorePath('') ,
            DocumentRegister::todayDate()
        );
        $document->record(new DocumentCreatedDomainEvent($document->id->value() , $document->toArray()));
        return $document;
    }

    public function name(): DocumentName
    {
        return $this->name;
    }

    public function directoryFilePath(): string
    {
        return $this->storePath->directory();
    }

    public function directoryPath(): string
    {
        return "/Business/Commerce_{$this->commerceId->value()}/Documents";
    }

    public function recordUploadFileData(string $fileName , string $path): void
    {
        $this->name = $this->name->update($fileName);
        $this->storePath = $this->storePath->update($path);
    }

    public function setEventDelete(): void
    {
        $this->record(new DocumentDeletedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'commerceId' => $this->commerceId->value() ,
            'name' => $this->name->value() ,
            'storePath' => $this->storePath->value() ,
            'register' => $this->register->value()
        ];
    }
}