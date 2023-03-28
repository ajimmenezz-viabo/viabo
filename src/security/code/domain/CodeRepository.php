<?php declare(strict_types=1);


namespace Viabo\security\code\domain;


interface CodeRepository
{
    public function save(Code $code): void;
}