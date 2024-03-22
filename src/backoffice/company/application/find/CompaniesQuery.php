<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class CompaniesQuery implements Query
{
    public function __construct(public string $userProfileId)
    {
    }
}