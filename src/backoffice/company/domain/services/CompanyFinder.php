<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain\services;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\CompanyView;
use Viabo\backoffice\company\domain\exceptions\CompanyNotExist;
use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\backoffice\shared\domain\commerce\CompanyLegalRepresentative;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyFinder
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function commerce(CompanyId $commerceId , CompanyLegalRepresentative $legalRepresentative): Company
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
            throw new CompanyNotExist();
        }

        return is_array($commerce) ? $commerce[0] : $commerce;
    }

    public function view(CompanyId $commerceId , CompanyLegalRepresentative $legalRepresentative): CompanyView
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
            throw new CompanyNotExist();
        }

        return is_array($commerce) ? $commerce[0] : $commerce;
    }

    public function searchCriteria(Criteria $criteria): Company
    {
        $commerce = $this->repository->searchCriteria($criteria);

        if (empty($commerce)) {
            throw new CompanyNotExist();
        }

        return $commerce[0];
    }
}