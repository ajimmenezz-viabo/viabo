<?php declare(strict_types=1);


namespace Viabo\security\code\application\update;


final readonly class CodeCheckerRequest
{
    public function __construct(private string $userId, private string $verificationCode)
    {
    }

    public function getUserId(): string
    {
        return $this->userId;
    }

    public function getVerificationCode(): string
    {
        return $this->verificationCode;
    }

}