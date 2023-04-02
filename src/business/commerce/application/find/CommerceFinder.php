<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceLegalRepresentative;
use Viabo\business\commerce\domain\CommerceRepository;
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

        return array_map(function (Commerce $commerce) {
            $commerce = $commerce->toArray();
            unset($commerce['legalRepresentative'] , $commerce['active']);
            return $commerce;
        } , $commerces);
    }
}