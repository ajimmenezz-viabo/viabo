<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\exceptions\CommerceNotExist;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommerceFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(CommerceLegalRepresentative $legalRepresentative): array
    {
        $filters = Filters::fromValues([
            ['field' => 'legalRepresentative.value' , 'operator' => '=' , 'value' => $legalRepresentative->value()]
        ]);
        $commerces = $this->repository->searchCriteria(new Criteria($filters));

        if(empty($commerces)){
            throw new CommerceNotExist();
        }

        $commerces = array_map(function (Commerce $commerce) {
            $commerce = $commerce->toArray();
            unset($commerce['legalRepresentative'] , $commerce['active']);
            return $commerce;
        } , $commerces);

        return $commerces[0];
    }
}