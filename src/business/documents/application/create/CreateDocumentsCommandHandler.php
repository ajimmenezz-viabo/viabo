<?php declare(strict_types=1);


namespace Viabo\business\documents\application\create;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateDocumentsCommandHandler implements CommandHandler
{
    public function __construct(private DocumentsCreator $creator)
    {
    }

    public function __invoke(CreateDocumentsCommand $command): void
    {
        $commerceId = new CommerceId($command->commerceId);
        ($this->creator)($commerceId , $command->uploadDocuments);

    }
}