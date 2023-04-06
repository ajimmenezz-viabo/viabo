<?php declare(strict_types=1);


namespace Viabo\business\services\domain;


use Viabo\business\shared\domain\commerce\CommerceId;

interface ServiceRepository
{
    public function save(Service $service): void;

    public function delete(CommerceId $commerceId): void;
}