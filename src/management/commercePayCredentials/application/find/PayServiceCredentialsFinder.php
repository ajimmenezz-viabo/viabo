<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\application\find;

use Viabo\management\commercePayCredentials\domain\PayServiceCredentialsRepository;

final readonly class PayServiceCredentialsFinder
{
    public function __construct(private PayServiceCredentialsRepository $repository)
    {
    }

    public function __invoke(string $commerceId): PayServiceCredentialsResponse
    {
        $credential = $this->repository->searchBy($commerceId);
        $data = empty($credential) ? [] : $credential->toArray();

        return new PayServiceCredentialsResponse($data);

    }
}