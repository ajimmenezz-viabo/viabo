<?php declare(strict_types=1);


namespace Viabo\security\code\application\create;


final readonly class CreateCodeCommand
{
    public function __construct(private string $userId)
    {
    }

    public function getUserId(): string
    {
        return $this->userId;
    }

}