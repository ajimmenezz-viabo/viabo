<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\management\commercePayCredentials\domain\CommercePayCredentials;
use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsCommerceId;
use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CommercePayCredentialsDoctrineRepository extends DoctrineRepository implements CommercePayCredentialsRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function searchBy (CommercePayCredentialsCommerceId $commerceId): CommercePayCredentials|null
    {
        return $this->repository(CommercePayCredentials::class)->findOneBy([
            'commerceId.value' => $commerceId->value()
        ]);
    }
}
