<?php

namespace Viabo\stp\cardCloud\domain;

interface CardCloudRepository
{
    public function createAccount(string $businessId, string $companyId, string $rfc): array;
}
