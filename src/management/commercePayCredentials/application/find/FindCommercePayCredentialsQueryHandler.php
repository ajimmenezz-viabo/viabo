<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\application\find;

use Viabo\management\commercePayCredentials\domain\CommercePayCredentialsCommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindCommercePayCredentialsQueryHandler implements QueryHandler
{
    public function __construct (private CommercePayCredentialsFinder $finder)
    {
    }

    public function __invoke (FindCommercePayCredentialsQuery $query):Response
    {
        return ($this->finder)(new CommercePayCredentialsCommerceId($query->commerceId));
    }
}
