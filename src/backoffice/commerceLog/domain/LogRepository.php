<?php declare(strict_types=1);


namespace Viabo\backoffice\commerceLog\domain;


interface LogRepository
{
    public function save(Log $log): void;
}