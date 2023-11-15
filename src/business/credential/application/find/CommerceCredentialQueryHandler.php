<?php declare(strict_types=1);


namespace Viabo\business\credential\application\find;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommerceCredentialQueryHandler implements QueryHandler
{
    public function __construct(private CredentialFinder $finder)
    {
    }

    public function __invoke(CommerceCredentialQuery $query): Response
    {
        $commerceId = CommerceId::create($query->commerceId);
        return ($this->finder)($commerceId);
    }
}