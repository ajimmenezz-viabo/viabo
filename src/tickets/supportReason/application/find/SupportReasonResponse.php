<?php declare(strict_types=1);


namespace Viabo\tickets\supportReason\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class SupportReasonResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}