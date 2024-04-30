<?php declare(strict_types=1);


namespace Viabo\backoffice\projection\application\find_company_services_by_user;


use Viabo\shared\domain\bus\query\Response;

final readonly class ProjectionResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}