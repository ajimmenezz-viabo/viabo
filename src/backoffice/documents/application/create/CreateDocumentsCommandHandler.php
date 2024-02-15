<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\application\create;


use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateDocumentsCommandHandler implements CommandHandler
{
    public function __construct(private DocumentsCreator $creator)
    {
    }

    public function __invoke(CreateDocumentsCommand $command): void
    {
        $commerceId = new CompanyId($command->commerceId);
        ($this->creator)($commerceId , $command->uploadDocuments);

    }
}