<?php declare(strict_types=1);


namespace Viabo\backoffice\services\application\events;


use Viabo\backoffice\services\domain\ServiceRepository;

final readonly class ServicesDeleter
{
    public function __construct(private ServiceRepository $repository)
    {
    }

    public function __invoke(string $companyId): void
    {
        $this->repository->delete($companyId);
    }

}