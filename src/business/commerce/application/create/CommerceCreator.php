<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRegisterStep;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommerceCreator
{
    public function __construct(private CommerceRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(
        CommerceLegalRepresentative $legalRepresentative , CommerceRegisterStep $registerStep
    ): void
    {
        $commerce = Commerce::create($legalRepresentative , $registerStep);
        $this->repository->save($commerce);

        $this->bus->publish(...$commerce->pullDomainEvents());
    }

}