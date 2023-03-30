<?php declare(strict_types=1);


namespace Viabo\security\code\application\delete;


use Viabo\security\code\domain\CodeRepository;
use Viabo\security\code\domain\CodeUserId;
use Viabo\security\code\domain\exceptions\CodeExpired;
use Viabo\security\code\domain\exceptions\WrongCode;

final readonly class CodeChecker
{
    public function __construct(private CodeRepository $repository)
    {
    }

    public function __invoke(CodeCheckerRequest $request): void
    {
        $code = $this->repository->search(new CodeUserId($request->getUserId()));

        if(empty($code)){
            throw new WrongCode();
        }

        if($code->isNotSame($request->getVerificationCode())){
            throw new WrongCode();
        }

        if($code->isExpired()){
            throw new CodeExpired();
        }

        $this->repository->delete($code);
    }
}