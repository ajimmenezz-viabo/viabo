<?php

namespace Viabo\stp\cardCloud\domain;

interface CardCloudRepository
{
    public function createAccount(string $businessId, string $companyId, string $rfc): array;

    public function searchSubAccount(string $businessId, string $subAccountId): array;

    public function searchMovements(string $businessId, string $subAccountId, string $fromDate, string $toDate): array;
}
