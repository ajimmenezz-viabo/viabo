<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\shared\domain\bus\query\Response;

final readonly class ConciliationResponse implements Response
{
    public function __construct(public array $referenceNumber)
    {
    }
}