<?php declare(strict_types=1);


namespace Viabo\backoffice\documents\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateDocumentsCommandHandler implements CommandHandler
{
    public function __construct(private DocumentsCreator $creator)
    {
    }

    public function __invoke(CreateDocumentsCommand $command): void
    {
        $this->creator->__invoke($command->companyId, $command->uploadDocuments);
    }
}