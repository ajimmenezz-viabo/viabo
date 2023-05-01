<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class UserResponse implements Response
{
    public function __construct(public array $userData)
    {
    }
}