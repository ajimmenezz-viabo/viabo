<?php declare(strict_types=1);


namespace Viabo\management\commerce\application\find;


use Viabo\management\commerce\domain\CommerceRepository;
use Viabo\management\commerce\domain\CommerceView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercesAffiliatesFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(): CommercesResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'statusId' , 'operator' => '=' , 'value' => '3' ]
        ]);
        $commerces = $this->repository->searchCriteria(new Criteria($filters));

        return new CommercesResponse(array_map(function (CommerceView $commerce){
            return $commerce->toArray();
        },$commerces));
    }
}