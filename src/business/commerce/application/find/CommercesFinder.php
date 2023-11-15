<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercesFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(): CommercesResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'active' , 'operator' => '=' , 'value' => '1' ]
        ]);
        $commerces = $this->repository->searchViewCriteria(new Criteria($filters));
        
        return new CommercesResponse(array_map(function (CommerceView $commerce) {
            return $commerce->toArray();
        } , $commerces));
    }
}