<?php declare(strict_types=1);

namespace Viabo\management\commercePay\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\management\commercePay\domain\CommercePay;
use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayUrlCode;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CommercePayDoctrineRepository extends DoctrineRepository implements CommercePayRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save (CommercePay $commercePay): void
    {
        $this->persist($commercePay);
    }

    public function search(CommercePayUrlCode $urlCode):CommercePay|null
    {
        return $this->repository(CommercePay::class)->findOneBy(['urlCode.value'=> $urlCode->value()]);

    }

    public function searchBy (CommercePayCommerceId $commerceId): CommercePay|null
    {
        return $this->repository(CommercePay::class)->findOneBy(['commerceId.value'=> $commerceId->value()]);
    }
}
