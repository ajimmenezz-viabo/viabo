<?php declare(strict_types=1);


namespace Viabo\security\user\application\login;


use Viabo\shared\domain\bus\query\Response;

final readonly class UserLoginResponse implements Response
{
    public function __construct(public string $userId)
    {
    }
}