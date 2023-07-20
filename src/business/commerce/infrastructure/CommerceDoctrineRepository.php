<?php declare(strict_types=1);


namespace Viabo\business\commerce\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceView;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CommerceDoctrineRepository extends DoctrineRepository implements CommerceRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

    public function save(Commerce $commerce): void
    {
        $this->persist($commerce);
    }

    public function search(CommerceId $commerceId): Commerce|null
    {
        return $this->repository(Commerce::class)->find($commerceId->value());
    }

    public function searchView(CommerceId $commerceId): CommerceView|null
    {
        return $this->repository(CommerceView::class)->find($commerceId->value());
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteria = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Commerce::class)->matching($criteria)->toArray();
    }

    public function searchViewCriteria(Criteria $criteria): array
    {
        $criteria = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CommerceView::class)->matching($criteria)->toArray();
    }

    public function searchCommerceIdBy(string $userId , string $userProfileId): string
    {
        $query = "call SearchCommerceId(:userId,:userProfileId)";
        $statement = $this->entityManager()->getConnection()->prepare($query);
        $statement->bindValue('userId' , $userId);
        $statement->bindValue('userProfileId' , $userProfileId);
        $result = $statement->executeQuery()->fetchAllAssociative();
        if (!empty($result)) {
            foreach ($result as $item) {
                return $item['CommerceId'];
            }
        }
        return '';
    }

    public function update(Commerce $commerce): void
    {
        $this->entityManager()->flush($commerce);
    }
}