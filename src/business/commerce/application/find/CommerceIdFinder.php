<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\CommerceRepository;

final readonly class CommerceIdFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(string $userId , string $userProfileId): CommerceIdResponse
    {
        $commerceId = $this->repository->searchCommerceIdBy($userId , $userProfileId);
        return new CommerceIdResponse($commerceId);
    }
}