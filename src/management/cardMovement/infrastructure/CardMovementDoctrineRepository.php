<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\cardMovement\domain\CardMovement;
use Viabo\management\cardMovement\domain\CardMovementRepository;
use Viabo\management\cardMovement\domain\CardMovementView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CardMovementDoctrineRepository extends DoctrineRepository implements CardMovementRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(CardMovement $cardMovement): void
    {
        $this->persist($cardMovement);
    }

    public function matching(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CardMovement::class)->matching($criteriaConvert)->toArray();
    }

    public function matchingView(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CardMovementView::class)->matching($criteriaConvert)->toArray();
    }

    public function delete(CardMovement $cardMovement): void
    {
        $this->remove($cardMovement);
    }
}