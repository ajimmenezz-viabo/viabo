<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\application\create;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\externalAccount\domain\exceptions\ExternalAccountExist;
use Viabo\spei\externalAccount\domain\ExternalAccount;
use Viabo\spei\externalAccount\domain\ExternalAccountRepository;

final readonly class ExternalAccountCreator
{
    public function __construct(private ExternalAccountRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(
        string $userId ,
        string $interbankCLABE ,
        string $beneficiary ,
        string $rfc ,
        string $alias ,
        string $bank ,
        string $email ,
        string $phone
    ): void
    {
        $this->ensureInterbankCLABE($interbankCLABE);

        $externalAccount = ExternalAccount::create(
            $userId ,
            $interbankCLABE ,
            $beneficiary ,
            $rfc ,
            $alias ,
            $bank ,
            $email ,
            $phone
        );

        $this->repository->save($externalAccount);

        $this->bus->publish(...$externalAccount->pullDomainEvents());
    }

    private function ensureInterbankCLABE(string $interbankCLABE): void
    {
        $filters = Filters::fromValues([
            ['field' => 'interbankCLABE.value' , 'operator' => '=' , 'value' => $interbankCLABE]
        ]);

        $externalAccount = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($externalAccount)) {
            throw new ExternalAccountExist();
        }
    }
}