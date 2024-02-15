<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommerceCreator
{
    public function __construct(private CompanyRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(string $legalRepresentative): void
    {
        $commerce = Company::create($legalRepresentative);
        $this->repository->save($commerce);

        $this->bus->publish(...$commerce->pullDomainEvents());
    }

}