<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateDocumentsCommand implements Command
{
    public function __construct(public string $commerceId , public array $uploadDocuments)
    {
    }
}