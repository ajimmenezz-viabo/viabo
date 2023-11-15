<?php declare(strict_types=1);


namespace Viabo\business\services\application\find;


use Viabo\business\services\domain\Service;
use Viabo\business\services\domain\ServiceRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommerceServicesFinder
{
    public function __construct(private ServiceRepository $repository)
    {
    }

    public function __invoke(string $commerceId): ServiceResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId]
        ]);
        $services = $this->repository->searchCriteria(new Criteria($filters));

        return new ServiceResponse(array_map(function (Service $service) {
            return $service->type();
        } , $services));
    }
}