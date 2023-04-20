<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class CommercesResponse implements Response
{
    public function __construct(public array $commerces)
    {
    }
}