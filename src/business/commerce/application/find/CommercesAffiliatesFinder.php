<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;



use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercesAffiliatesFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(): CommercesAffiliatesResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'statusId' , 'operator' => '=' , 'value' => '3' ]
        ]);
        $commerces = $this->repository->searchViewCriteria(new Criteria($filters));

        return new CommercesAffiliatesResponse(array_map(function (CommerceView $commerce){
            return $commerce->toArrayForCatalog();
        },$commerces));
    }
}