<?php declare(strict_types=1);


namespace Viabo\business\credential\application\find;


use Viabo\business\credential\domain\services\CredentialCriteriaFinder;
use Viabo\business\shared\domain\commerce\CommerceId;

final readonly class CredentialFinder
{
    public function __construct(private CredentialCriteriaFinder $finder)
    {
    }

    public function __invoke(CommerceId $commerceId): CredentialResponse
    {
        $credential = ($this->finder)($commerceId);
        return new CredentialResponse($credential->toArray());
    }

}
