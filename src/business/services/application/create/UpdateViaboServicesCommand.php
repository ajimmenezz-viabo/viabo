<?php declare(strict_types=1);


namespace Viabo\business\services\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class UpdateViaboServicesCommand implements Command
{
    public function __construct(public string $commerceId , public array $services)
    {
    }

}