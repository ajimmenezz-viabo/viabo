<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\application\find;

use Viabo\spei\externalAccount\domain\exceptions\ExternalAccountNotExist;
use Viabo\spei\externalAccount\domain\ExternalAccountRepository;

final readonly class ExternalAccountFinder
{
    public function __construct(private ExternalAccountRepository $repository)
    {
    }

    public function __invoke(string $externalAccountId): ExternalAccountResponse
    {
        $externalAccount = $this->repository->search($externalAccountId);

        if(empty($externalAccount)){
            throw new ExternalAccountNotExist();
        }

        return new ExternalAccountResponse($externalAccount->toArray());
    }
}