<?php declare(strict_types=1);


namespace Viabo\business\documents\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\documents\domain\Document;
use Viabo\business\documents\domain\DocumentName;
use Viabo\business\documents\domain\DocumentRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\symfony\uploadFile\UploadedFileSymfonyAdapter;

final class DocumentDoctrineRepository extends DoctrineRepository implements DocumentRepository
{
    public function __construct(
        EntityManager                               $BusinessEntityManager ,
        private readonly UploadedFileSymfonyAdapter $uploadedFile
    )
    {
        parent::__construct($BusinessEntityManager);
    }


    public function save(Document $document , $uploadDocument): void
    {
        $this->uploadedFile->upload(
            $uploadDocument ,
            $document->directoryPath() ,
            ['pdf' , 'img' , 'jpg' , 'png'] ,
            $document->name()->value()
        );
        $document->recordUploadFileData($this->uploadedFile->fileName() , $this->uploadedFile->path());
        $this->persist($document);
    }

    public function deleteBy(CommerceId $commerceId , DocumentName $name): void
    {
        $this->entityManager()->getConnection()->delete('t_business_commerces_documents' ,
            ['CommerceId' => $commerceId->value() , 'Name' => $name->value()]
        );
    }
}