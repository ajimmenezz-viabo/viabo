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
        private ServicePersonalized $personalized
    )
    {
    }

    public static function create(
        CommerceId $commerceId ,
        string     $serviceType ,
        string     $cardNumbers ,
        string     $cardUse ,
        string     $personalized
    ): self
    {

        $service = new self(
            ServiceId::create() ,
            $commerceId ,
            new ServiceType($serviceType) ,
            new ServiceCardNumbers($cardNumbers) ,
            new ServiceCardUse($cardUse) ,
            new ServicePersonalized($personalized)
        );
        $service->record(new ServiceCreatedDomainEvent($service->id->value() , $service->toArray()));
        return $service;
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
            'personalized' => $this->personalized->value()
        ];
    }

}