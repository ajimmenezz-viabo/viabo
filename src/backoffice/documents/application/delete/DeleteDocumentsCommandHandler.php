<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\application\delete;


use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class DeleteDocumentsCommandHandler implements CommandHandler
{
    public function __construct(private DocumentsDeleter $deleter)
    {
    }

    public function __invoke(DeleteDocumentsCommand $command): void
    {
        $commerceId = new CompanyId($command->commerceId);

        ($this->deleter)($commerceId , $command->uploadDocuments);
    }
}