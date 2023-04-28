<?php declare(strict_types=1);


namespace Viabo\business\documents\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class DocumentsResponse implements Response
{
    public function __construct(public array $documents)
    {
    }
}