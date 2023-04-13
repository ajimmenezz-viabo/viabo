<?php declare(strict_types=1);


namespace Viabo\security\session\domain;


interface SessionRepository
{
    public function save(Session $session): void;
}