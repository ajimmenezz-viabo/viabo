<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\shared\domain\Collection;

final class CardOperations extends Collection
{
    protected function type(): string
    {
        return CardOperation::class;
    }
}