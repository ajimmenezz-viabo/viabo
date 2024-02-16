<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\documents\domain\Document;
use Viabo\backoffice\documents\domain\DocumentName;
use Viabo\backoffice\documents\domain\DocumentRepository;
use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\backoffice\shared\domain\documents\DocumentId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;
use Viabo\shared\infrastructure\symfony\uploadFile\UploadedFileSymfonyAdapter;

final class DocumentDoctrineRepository extends DoctrineRepository implements DocumentRepository
{
    public function __construct(
        EntityManager                               $BackofficeEntityManager ,
        private readonly UploadedFileSymfonyAdapter $uploadedFile
    )
    {
        parent::__construct($BackofficeEntityManager);
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

    public function search(DocumentId $documentId): Document|null
    {
        return $this->repository(Document::class)->find($documentId->value());
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaDoctrine = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Document::class)->matching($criteriaDoctrine)->toArray();
    }

    public function deleteBy(CompanyId $commerceId , DocumentName $name): void
    {
        $this->entityManager()->getConnection()->delete('t_business_commerces_documents' ,
            ['CommerceId' => $commerceId->value() , 'Name' => $name->value()]
        );
    }

    public function delete(Document $document): void
    {
        $this->uploadedFile->removeFile($document->directoryFilePath());
        $this->remove($document);
    }
}