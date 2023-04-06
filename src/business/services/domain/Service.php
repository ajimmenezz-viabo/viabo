<?php declare(strict_types=1);


namespace Viabo\business\services\domain;


use Viabo\business\services\domain\events\ServiceCreatedDomainEvent;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Service extends AggregateRoot
{
    public function __construct(
        private ServiceId   $id ,
        private CommerceId  $commerceId ,
        private ServiceType $type
    )
    {
    }

    public static function create(
        CommerceLegalRepresentative $legalRepresentative , CommerceId $commerceId , string $serviceType
    ): self
    {

        $service = new self(ServiceId::create() , $commerceId , new ServiceType($serviceType));
        $service->record(new ServiceCreatedDomainEvent(
            $legalRepresentative->value() , $service->commerceId->value() , $service->toArray()
        ));
        return $service;
    }

    private function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'serviceType' => $this->type->value()
        ];
    }

}