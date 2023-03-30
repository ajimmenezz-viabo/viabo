<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\shared\domain\criteria\Criteria;

interface UserRepository
{
    public function save(User $user): void;

    public function search(UserEmail $email): ?User;

    public function searchId(UserId $userId): ?User;

    public function searchCriteria(Criteria $criteria): array;
}