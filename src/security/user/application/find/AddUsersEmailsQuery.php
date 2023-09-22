<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class AddUsersEmailsQuery implements Query
{
    public function __construct(public array $cards)
    {
    }
}