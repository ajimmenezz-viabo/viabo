<?php declare(strict_types=1);


namespace Viabo\business\services\application\create;


use Viabo\business\services\domain\Service;
use Viabo\business\services\domain\ServiceRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class ServicesCreator
{
    public function __construct(private ServiceRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(string $commerceId , array $services): void
    {
        $this->repository->delete(new CommerceId($commerceId));

        array_map(function (array $service) use ($commerceId) {
            $service = Service::create(
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