<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class AccountResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}