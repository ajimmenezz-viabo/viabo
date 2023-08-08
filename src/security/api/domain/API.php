<?php declare(strict_types=1);


namespace Viabo\security\api\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;

final class API extends AggregateRoot
{
    public function __construct(
        private APIId     $id ,
        private APIUrl    $url ,
        private APIToken  $token ,
        private APIActive $active
    )
    {
    }
}