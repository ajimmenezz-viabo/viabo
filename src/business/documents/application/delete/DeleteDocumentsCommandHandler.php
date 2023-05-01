<?php declare(strict_types=1);


namespace Viabo\business\documents\application\delete;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class DeleteDocumentsCommandHandler implements CommandHandler
{
    public function __construct(private DocumentsDeleter $deleter)
    {
    }

    public function __invoke(DeleteDocumentsCommand $command): void
    {
        $commerceId = new CommerceId($command->commerceId);

        ($this->deleter)($commerceId , $command->uploadDocuments);
    }
}