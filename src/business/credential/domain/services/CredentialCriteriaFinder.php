<?php declare(strict_types=1);


namespace Viabo\business\credential\domain\services;


use Viabo\business\credential\domain\Credential;
use Viabo\business\credential\domain\CredentialRepository;
use Viabo\business\credential\domain\exceptions\CredentialNotExist;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CredentialCriteriaFinder
{
    public function __construct(private CredentialRepository $repository)
    {
    }

    public function __invoke(CommerceId $commerceId): Credential
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value()]
        ]);
        $credential = $this->repository->searchCriteria(new Criteria($filters));

        if (empty($credential)) {
            throw new CredentialNotExist();
        }

        return $credential[0];
    }

}
