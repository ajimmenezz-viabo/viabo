<?php declare(strict_types=1);


namespace Viabo\business\commerceLog\domain;


interface LogRepository
{
    public function save(Log $log): void;
}