<?php declare(strict_types=1);


namespace Viabo\backofficeBusiness\business\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class BusinessResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}