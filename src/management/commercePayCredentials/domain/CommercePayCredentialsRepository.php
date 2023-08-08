<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\domain;

interface CommercePayCredentialsRepository
{
    public function searchBy (CommercePayCredentialsCommerceId $commerceId):CommercePayCredentials|null;
}
