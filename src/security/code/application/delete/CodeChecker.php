<?php declare(strict_types=1);


namespace Viabo\security\code\application\delete;


use Viabo\security\code\domain\CodeRepository;
use Viabo\security\code\domain\CodeValue;
use Viabo\security\code\domain\exceptions\CodeExpired;
use Viabo\security\code\domain\exceptions\WrongCode;
use Viabo\security\shared\domain\user\UserId;

final readonly class CodeChecker
{
    public function __construct(private CodeRepository $repository)
    {
    }

    public function __invoke(UserId $userId, CodeValue $verificationCode): void
    {
        $code = $this->repository->search($userId);

        if(empty($code)){
            throw new WrongCode();
        }

        if($code->isNotSame($verificationCode)){
            throw new WrongCode();
        }

        if($code->isExpired()){
            throw new CodeExpired();
        }

        $this->repository->delete($code);
    }
}