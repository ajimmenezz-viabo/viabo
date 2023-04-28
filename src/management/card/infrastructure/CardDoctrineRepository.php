<?php declare(strict_types=1);


namespace Viabo\management\card\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\card\domain\Card;
use Viabo\management\card\domain\CardRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CardDoctrineRepository extends DoctrineRepository implements CardRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(Card $card): void
    {
        $this->persist($card);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Card::class)->matching($criteriaConvert)->toArray();
    }
}