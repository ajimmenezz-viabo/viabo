<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_sub_account_by_company;

use Viabo\shared\domain\bus\query\Response;

final readonly class SubAccountCardCloudServiceResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}
