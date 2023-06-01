<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\domain\services;


use Viabo\business\commerceUser\domain\CommerceUser;
use Viabo\business\commerceUser\domain\CommerceUserId;
use Viabo\business\commerceUser\domain\CommerceUserKey;
use Viabo\business\commerceUser\domain\CommerceUserRepository;
use Viabo\business\commerceUser\domain\exceptions\CommerceUserNotExist;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommerceUserFinder
{
    public function __construct(private CommerceUserRepository $repository)
    {
    }

    public function __invoke(CommerceUserKey $userId): CommerceUser
    {
        $filters = Filters::fromValues([
            ['field' => 'userId.value' , 'operator' => '=' , 'value' => $userId->value()]
        ]);

        $commerceUser = $this->repository->searchCriteria(new Criteria($filters));

        if (empty($commerceUser)) {
            throw new CommerceUserNotExist();
        }

        return $commerceUser[0];
    }

}