<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\application\create;


use Viabo\management\speiDeposit\domain\Deposit;
use Viabo\management\speiDeposit\domain\DepositAPIKey;
use Viabo\management\speiDeposit\domain\DepositData;
use Viabo\management\speiDeposit\domain\DepositRepository;
use Viabo\management\speiDeposit\domain\exceptions\DepositExist;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class DepositCreator
{
    public function __construct(private DepositRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(DepositAPIKey $apiKey , DepositData $depositData): void
    {
        $this->ensureNotExist($apiKey);

        $deposit = Deposit::create($apiKey , $depositData);
        $this->repository->save($deposit);

        $this->bus->publish(...$deposit->pullDomainEvents());
    }

    private function ensureNotExist(DepositAPIKey $apiKey): void
    {
        $filter = Filters::fromValues([
            ['field' => 'apiKey.value' , 'operator' => '=' , 'value' => $apiKey->value() ]
        ]);

        $deposit = $this->repository->searchCriteria(new Criteria($filter));

        if(!empty($deposit)){
            throw new DepositExist();
        }
    }
}