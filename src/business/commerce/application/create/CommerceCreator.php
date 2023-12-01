<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommerceCreator
{
    public function __construct(private CommerceRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(string $legalRepresentative): void
    {
        $commerce = Commerce::create($legalRepresentative);
        $this->repository->save($commerce);

        $this->bus->publish(...$commerce->pullDomainEvents());
    }

}