<?php declare(strict_types=1);


namespace Viabo\stp\users\application\find_user_cards;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\stp\users\application\UserCardCloudResponse;
use Viabo\stp\users\domain\UserCardCloud;
use Viabo\stp\users\domain\UserCardCloudRepository;

final readonly class UserCardsCloudFinder
{
    public function __construct(private UserCardCloudRepository $repository)
    {
    }

    public function __invoke(string $userId): UserCardCloudResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'ownerId.value', 'operator' => '=', 'value' => $userId]
        ]);
        $users = $this->repository->searchCriteria(new Criteria($filters));
        return new UserCardCloudResponse(array_map(fn(UserCardCloud $user) => $user->cardId(), $users));
    }
}