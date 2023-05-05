<?php declare(strict_types=1);


namespace Viabo\business\credential\domain\services;


use Viabo\business\credential\domain\Credential;
use Viabo\business\credential\domain\CredentialRepository;
use Viabo\business\credential\domain\exceptions\CredentialExist;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CredentialValidator
{
    public function __construct(private CredentialRepository $repository)
    {
    }

    public function validateNotExist(Credential $credential): void
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $credential->commerce()->value() ]
        ]);

        $credential = $this->repository->searchCriteria(new Criteria($filters));

        if(!empty($credential)){
            throw new CredentialExist();
        }
    }
}