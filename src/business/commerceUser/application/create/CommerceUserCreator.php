<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\create;


use Viabo\business\commerceUser\domain\CommerceUser;
use Viabo\business\commerceUser\domain\CommerceUserKey;
use Viabo\business\commerceUser\domain\CommerceUserRepository;
use Viabo\business\commerceUser\domain\exceptions\CommerceUserNotSameCommerce;
use Viabo\business\commerceUser\domain\services\CommerceUserFinder;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\DomainError;

final readonly class CommerceUserCreator
{
    public function __construct(
        private CommerceUserRepository $repository ,
        private CommerceUserFinder     $finder ,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(CommerceId $commerceId , CommerceUserKey $userId): void
    {
        $commerceUser = $this->search($userId);

        if (!empty($commerceUser) && $commerceUser->isDifferent($commerceId)) {
            throw new CommerceUserNotSameCommerce();
        }

        if (empty($commerceUser)) {
            $commerceUser = CommerceUser::create($commerceId , $userId);
            $this->repository->save($commerceUser);

            $this->bus->publish(...$commerceUser->pullDomainEvents());
        }

    }

    private function search(CommerceUserKey $userId): CommerceUser|null
    {
        try {
            return $this->finder->__invoke($userId);
        } catch (DomainError) {
            return null;
        }
    }
}