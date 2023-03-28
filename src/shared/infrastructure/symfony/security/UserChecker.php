<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\symfony\security;


use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Viabo\security\user\domain\User;

final class UserChecker implements UserCheckerInterface
{
    public function checkPreAuth(UserInterface $user)
    {
        var_dump($user);
    }

    public function checkPostAuth(UserInterface $user)
    {
        var_dump($user);
    }
}