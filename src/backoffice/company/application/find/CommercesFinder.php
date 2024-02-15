<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\CompanyView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercesFinder
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(): CommercesResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'active' , 'operator' => '=' , 'value' => '1' ]
        ]);
        $commerces = $this->repository->searchViewCriteria(new Criteria($filters));
        
        return new CommercesResponse(array_map(function (CompanyView $commerce) {
            return $commerce->toArray();
        } , $commerces));
    }
}