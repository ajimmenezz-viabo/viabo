<?php declare(strict_types=1);


namespace Viabo\spei\bank\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class BankResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}