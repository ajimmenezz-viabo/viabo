<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain\services;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\CommerceView;
use Viabo\business\commerce\domain\exceptions\CommerceNotExist;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommerceFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function commerce(CommerceId $commerceId , CommerceLegalRepresentative $legalRepresentative): Commerce
    {
        $commerce = null;
        if ($commerceId->isNotEmpty()) {
            $commerce = $this->repository->search($commerceId);
        }

        if ($legalRepresentative->isNotEmpty()) {
            $filters = Filters::fromValues([
                ['field' => 'legalRepresentative' , 'operator' => '=' , 'value' => $legalRepresentative->value()]
            ]);
            $commerce = $this->repository->searchCriteria(new Criteria($filters));
        }

        if (empty($commerce)) {
            throw new CommerceNotExist();
        }

        return is_array($commerce) ? $commerce[0] : $commerce;
    }

    public function view(CommerceId $commerceId , CommerceLegalRepresentative $legalRepresentative): CommerceView
    {
        $commerce = null;

        if ($commerceId->isNotEmpty()) {
            $commerce = $this->repository->searchView($commerceId);
        }

        if ($legalRepresentative->isNotEmpty()) {
            $filters = Filters::fromValues([
                ['field' => 'legalRepresentative' , 'operator' => '=' , 'value' => $legalRepresentative->value()]
            ]);
            $commerce = $this->repository->searchViewCriteria(new Criteria($filters));
        }

        if (empty($commerce)) {
            throw new CommerceNotExist();
        }

        return is_array($commerce) ? $commerce[0] : $commerce;
    }
}