<?php declare(strict_types=1);


namespace Viabo\security\user\application\login;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\user\domain\UserPassword;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class LoginCommandHandler implements QueryHandler
{
    public function __construct(private UserLogin $login)
    {
    }

    public function __invoke(LoginQuery $command): Response
    {
        $username = new UserEmail($command->username);
        $password = new UserPassword($command->password);

        return $this->login->__invoke($username,$password);
    }
}