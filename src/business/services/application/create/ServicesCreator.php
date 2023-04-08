<?php declare(strict_types=1);


namespace Viabo\business\services\application\create;


use Viabo\business\services\domain\Service;
use Viabo\business\services\domain\ServiceRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class ServicesCreator
{
    public function __construct(private ServiceRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(
        CommerceLegalRepresentative $legalRepresentative ,
        CommerceId                  $commerceId ,
        array                       $services
    ): void
    {

        $this->repository->delete($commerceId);

        array_map(function (array $service) use ($legalRepresentative , $commerceId) {
            $service = Service::create(
                $legalRepresentative ,
                $commerceId ,
                $service['type'] ,
                $service['cardNumbers'] ,
                $service['cardUse'] ,
                $service['personalized']
            );
            $this->repository->save($service);

            $this->bus->publish(...$service->pullDomainEvents());
        } , $services);
    }

}