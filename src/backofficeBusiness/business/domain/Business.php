<?php declare(strict_types=1);


namespace Viabo\backofficeBusiness\business\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;

final class Business extends AggregateRoot
{
    public function __construct(
        private BusinessId     $id,
        private BusinessName   $name,
        private BusinessActive $active
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'name' => $this->name->value(),
            'active' => $this->active->value()
        ];
    }
}