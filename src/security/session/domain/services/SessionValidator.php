<?php declare(strict_types=1);


namespace Viabo\security\session\domain\services;


use Viabo\security\shared\domain\user\UserId;

final readonly class SessionValidator
{
    public function __construct(private SessionUpdater $updater)
    {
    }

    public function closeOpenSession(UserId $userId): void
    {
        $this->updater->__invoke($userId);
    }
}