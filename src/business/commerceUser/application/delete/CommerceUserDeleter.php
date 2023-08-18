<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\delete;


use Viabo\business\commerceUser\domain\CommerceUser;
use Viabo\business\commerceUser\domain\CommerceUserKey;
use Viabo\business\commerceUser\domain\CommerceUserRepository;
use Viabo\business\commerceUser\domain\services\CommerceUserFinder;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommerceUserDeleter
{
    public function __construct(
        private CommerceUserRepository $repository ,
        private CommerceUserFinder     $finder ,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(CommerceUserKey $userId): void
    {
        $commerceUser = $this->searchCommerceUser($userId);

        if (empty($commerceUser)) {
            return;
        }

        $commerceUser->setEvenDelete();
        $this->bus->publish(...$commerceUser->pullDomainEvents());

        $this->repository->delete($commerceUser);
    }

    private function searchCommerceUser(CommerceUserKey $userId): CommerceUser|null
    {
        try {
            return $this->finder->__invoke($userId);
        } catch (\DomainException) {
            return null;
        }
    }
}