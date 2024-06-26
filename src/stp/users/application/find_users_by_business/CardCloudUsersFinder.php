<?php declare(strict_types=1);


namespace Viabo\stp\users\application\find_users_by_business;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\stp\users\application\UserCardCloudResponse;
use Viabo\stp\users\domain\UserCardCloud;
use Viabo\stp\users\domain\UserCardCloudRepository;

final readonly class CardCloudUsersFinder
{
    public function __construct(private UserCardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId): UserCardCloudResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'businessId.value', 'operator' => '=', 'value' => $businessId]
        ]);
        $users = $this->repository->searchCriteria(new Criteria($filters));

        return new UserCardCloudResponse(array_map(function (UserCardCloud $user) {
            $data = $user->toArray();
            unset($data['id'],$data['businessId'],$data['email'],$data['createdByUser'],$data['createDate']);
            return $data;
        }, $users));
    }
}