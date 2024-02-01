<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class TransactionResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}