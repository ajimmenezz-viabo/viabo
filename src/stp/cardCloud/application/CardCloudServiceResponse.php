<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application;

use Viabo\shared\domain\bus\query\Response;

final readonly class CardCloudServiceResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}
