<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\application\delete;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\spei\externalAccount\domain\exceptions\ExternalAccountNotExist;
use Viabo\spei\externalAccount\domain\ExternalAccountRepository;

final readonly class ExternalAccountDisabler
{
    public function __construct(private ExternalAccountRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(string $userId , string $externalAccountId): void
    {
        $externalAccount = $this->repository->search($externalAccountId);

        if (empty($externalAccount)) {
            throw new ExternalAccountNotExist();
        }

        $externalAccount->disable();
        $this->repository->update($externalAccount);

        $this->bus->publish(...$externalAccount->pullDomainEvents());
    }
}