<?php declare(strict_types=1);

namespace Viabo\management\commercePay\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\management\commercePay\domain\CommercePay;
use Viabo\management\commercePay\domain\CommercePayReference;
use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayView;
use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CommercePayDoctrineRepository extends DoctrineRepository implements CommercePayRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(CommercePay $commercePay): void
    {
        $this->persist($commercePay);
    }

    public function search(CommercePayId $id): CommercePay|null
    {
        return $this->repository(CommercePay::class)->find($id->value());
    }

    public function searchView(CommercePayId $commercePayId): CommercePayView|null
    {
        return $this->repository(CommercePayView::class)->find($commercePayId->value());
    }

    public function searchCriteriaView(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CommercePayView::class)->matching($criteriaConvert)->toArray();

    }

    public function searchBy(CommercePayReference $referenceId): CommercePay|null
    {
        return $this->repository(CommercePay::class)->findOneBy(['referenceId.value' => $referenceId->value()]);
    }

    public function update(CommercePay $commercePay): void
    {
        $this->entityManager()->flush($commercePay);
    }
}
