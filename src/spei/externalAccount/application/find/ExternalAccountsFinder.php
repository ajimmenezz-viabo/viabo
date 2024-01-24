<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\externalAccount\domain\ExternalAccount;
use Viabo\spei\externalAccount\domain\ExternalAccountRepository;

final readonly class ExternalAccountsFinder
{
    public function __construct(private ExternalAccountRepository $repository)
    {
    }

    public function __invoke(): ExternalAccountResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'active.value' , 'operator' => '=' , 'value' => '1']
        ]);
        $externalAccounts = $this->repository->searchCriteria(new Criteria($filters));

        return new ExternalAccountResponse(array_map(function (ExternalAccount $externalAccount) {
            return $externalAccount->toArray();
        } , $externalAccounts));
    }
}