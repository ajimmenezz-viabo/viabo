<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\application\find;

use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsCommerceId;
use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsRepository;

final readonly class CommercePayCredentialsFinder
{
    public function __construct (private CommercePayCredentialsRepository $repository)
    {
    }

    public function __invoke (CommercePayCredentialsCommerceId $commerceId):FindCommercePayCredentialsResponse
    {
        $commercePayCredentials = $this->repository->searchBy($commerceId);

        return new FindCommercePayCredentialsResponse($commercePayCredentials->toArray());

    }
}
