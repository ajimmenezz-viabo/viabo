<?php declare(strict_types=1);


namespace Viabo\security\user\application\events;


use Viabo\security\user\domain\events\StpAdminsEmailsDomainEvent;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class StpAdminsEmailsFinderByTransactionUpdated
{
    public function __construct(private UserRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(array $transaction): void
    {
        $filters = Filters::fromValues([
            ['field' => 'profile.value' , 'operator' => '=' , 'value' => '5' ],
            ['field' => 'stpAccountId.value' , 'operator' => '=' , 'value' => '25c5ddbc-a8c7-41ac-9454-0dbb041bcd9a' ],
        ]);

        $users = $this->repository->searchCriteria(new Criteria($filters));

        if(empty($users)){
            return;
        }

        $transaction['stpAdminsEmails'] = array_map(function (User $user){
           return $user->email();
        }, $users);

        $this->bus->publish(new StpAdminsEmailsDomainEvent($transaction['id'], $transaction));
    }
}