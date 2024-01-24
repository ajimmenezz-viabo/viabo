<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class ExternalAccountResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}