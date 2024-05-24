<?php

namespace Viabo\backoffice\shared\domain\cardCloud;

interface CardCloudRepository
{

    public function createAccount(array $company, array $credentials):array;
}
