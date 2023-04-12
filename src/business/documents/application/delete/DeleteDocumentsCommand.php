<?php declare(strict_types=1);


namespace Viabo\business\documents\application\delete;


use Viabo\shared\domain\bus\command\Command;

final readonly class DeleteDocumentsCommand implements Command
{
    public function __construct(
        public string $userId ,
        public string $commerceId ,
        public array  $uploadDocuments
    )
    {
    }
}