<?php declare(strict_types=1);


namespace Viabo\business\services\domain;


use Viabo\business\services\domain\events\ServiceCreatedDomainEvent;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Service extends AggregateRoot
{
    public function __construct(
        private ServiceId           $id ,
        private CommerceId          $commerceId ,
        private ServiceType         $type ,
        private ServiceCardNumbers  $cardNumbers ,
        private ServiceCardUse      $cardUse ,
        private ServicePersonalized $personalized ,
        private ServiceActive       $active
    )
    {
    }

    public static function create(
        string $commerceId ,
        string $serviceType ,
        string $cardNumbers ,
        string $cardUse ,
        string $personalized
    ): self
    {
        $service = new self(
            ServiceId::random() ,
            new CommerceId($commerceId) ,
            new ServiceType($serviceType) ,
            new ServiceCardNumbers($cardNumbers) ,
            new ServiceCardUse($cardUse) ,
            new ServicePersonalized($personalized) ,
            ServiceActive::active()
        );
        $service->record(new ServiceCreatedDomainEvent($service->id->value() , $service->toArray()));
        return $service;
    }

    public static function fromType(string $commerceId , string $serviceType): static
    {
        $service = new static(
            ServiceId::random() ,
            new CommerceId($commerceId) ,
            new ServiceType($serviceType) ,
            ServiceCardNumbers::empty() ,
            ServiceCardUse::empty() ,
            ServicePersonalized::empty() ,
            ServiceActive::active()
        );
        $service->record(new ServiceCreatedDomainEvent($service->id->value() , $service->toArray()));
        return $service;
    }

    public function updateActive(string $active): void
    {
        $this->active = $this->active->update($active);
    }

    public function type(): string
    {
        return $this->type->value();
    }

    private function toArray(): array
    {
        return [
            'commerceId' => $this->commerceId->value() ,
            'serviceType' => $this->type->value() ,
            'cardNumbers' => $this->cardNumbers->value() ,
            'cardUse' => $this->cardUse->value() ,
            'personalized' => $this->personalized->value(),
            'active' => $this->active->value()
        ];
    }

}