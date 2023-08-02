<?php declare(strict_types=1);

namespace Viabo\management\terminals\application\find;

use Viabo\shared\domain\bus\query\Response;

final class FindTerminalResponse implements Response
{
    public function __construct(public array $data) {
    }
}
