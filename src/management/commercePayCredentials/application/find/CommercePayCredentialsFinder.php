<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\application\find;

use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsCommerceId;
use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsRepository;
use Viabo\management\commercePayCredentials\domain\exceptions\CommercePayCredentialsNotExist;

final readonly class CommercePayCredentialsFinder
{
    public function __construct (private CommercePayCredentialsRepository $repository)
    {
    }

    public function __invoke (CommercePayCredentialsCommerceId $commerceId):CommercePayCredentialsResponse
    {
        $commercePayCredentials = $this->repository->searchBy($commerceId);

        if(empty($commercePayCredentials)){
            throw new CommercePayCredentialsNotExist();
        }

        return new CommercePayCredentialsResponse($commercePayCredentials->toArray());

    }
}
