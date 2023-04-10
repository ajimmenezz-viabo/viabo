<?php declare(strict_types=1);


namespace Viabo\business\documents\application\delete;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class DeleteDocumentsCommandHandler implements CommandHandler
{
    public function __construct(private DocumentsDeleter $deleter)
    {
    }
    public function __invoke(DeleteDocumentsCommand $command): void
    {
        $legalRepresentative = new CommerceLegalRepresentative($command->userId);
        $commerceId = new CommerceId($command->commerceId);

        ($this->deleter)($legalRepresentative, $commerceId, $command->uploadDocuments);
    }
}