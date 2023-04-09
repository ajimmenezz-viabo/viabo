<?php declare(strict_types=1);


namespace Viabo\security\code\domain\services;


use Viabo\security\code\domain\CodeRepository;
use Viabo\security\shared\domain\user\UserId;

final readonly class DeleteCodeExist
{
    public function __construct(private CodeRepository $repository)
    {
    }

    public function __invoke(UserId $userId): void
    {
        $code = $this->repository->search($userId);

        if(!empty($code)){
            $this->repository->delete($code);
        }
    }
}