<?php declare(strict_types=1);


namespace Viabo\security\user\application\login;


use Viabo\shared\domain\bus\query\Query;

final readonly class LoginQuery implements Query
{
    public function __construct(public string $username , public string $password)
    {
    }
}