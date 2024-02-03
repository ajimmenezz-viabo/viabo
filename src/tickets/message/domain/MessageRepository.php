<?php declare(strict_types=1);


namespace Viabo\tickets\message\domain;


interface MessageRepository
{
    public function save(Message $message): void;
}