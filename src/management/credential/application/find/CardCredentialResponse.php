<?php declare(strict_types=1);


namespace Viabo\management\credential\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class CardCredentialResponse implements Response
{
    public function __construct(public array $credentialData)
    {
    }
}