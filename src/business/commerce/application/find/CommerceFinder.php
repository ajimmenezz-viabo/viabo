<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceView;
use Viabo\business\commerce\domain\exceptions\CommerceNotExist;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommerceFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(CommerceLegalRepresentative $legalRepresentative): CommerceResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'legalRepresentative' , 'operator' => '=' , 'value' => $legalRepresentative->value()]
        ]);
        $commerce = $this->repository->searchViewCriteria(new Criteria($filters));

        if (empty($commerce)) {
            throw new CommerceNotExist();
        }

        $commerce = array_map(function (CommerceView $commerce) {
            return $commerce->toArray();
        } , $commerce);

        return new CommerceResponse($commerce[0]);
    }
}