<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain\services;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\tickets\ticket\domain\exceptions\TicketLimitByCardHolder;
use Viabo\tickets\ticket\domain\exceptions\TicketLimitByCommerceAdministrator;
use Viabo\tickets\ticket\domain\TicketRepository;

final readonly class validateBusinessRules
{
    public function __construct(private TicketRepository $repository)
    {
    }

    public function __invoke(string $userId , string $userProfileId): void
    {
        $this->checkCardHolderTicketLimit($userId);
        $this->checkCommerceAdministratorTicketLimit($userProfileId);
    }

    private function checkCardHolderTicketLimit(string $userId): void
    {
        $filters = Filters::fromValues([
            ['field' => 'createdByUser.value' , 'operator' => '=' , 'value' => $userId] ,
            ['field' => 'statusId.value' , 'operator' => 'IN' , 'value' => '1,2'] ,
        ]);
        $tickets = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($tickets) && count($tickets) >= 5) {
            throw new TicketLimitByCardHolder();
        }

    }

    private function checkCommerceAdministratorTicketLimit(string $userProfileId): void
    {
        $filters = Filters::fromValues([
            ['field' => 'assignedProfileId.value' , 'operator' => '=' , 'value' => $userProfileId] ,
            ['field' => 'statusId.value' , 'operator' => 'IN' , 'value' => '1,2'] ,
        ]);
        $tickets = $this->repository->searchCriteria(new Criteria($filters));

        $commerceAdministrator = '3';
        if (!empty($tickets) && count($tickets) >= 10 && $userProfileId === $commerceAdministrator) {
            throw new TicketLimitByCommerceAdministrator();
        }
    }

}