<?php declare(strict_types=1);


namespace Viabo\stp\users\application;


use Viabo\shared\domain\bus\query\Response;

final readonly class UserCardCloudResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}