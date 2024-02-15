<?php declare(strict_types=1);


namespace Viabo\backoffice\services\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class ServiceResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}