<?php declare(strict_types=1);


namespace Viabo\management\webhook\domain;



interface WebhookRepository
{
    public function save(string $pays);

    public function search(string $token): array;
}