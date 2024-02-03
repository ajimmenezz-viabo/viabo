<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\application\create;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\uploadFile\UploadFileRepository;
use Viabo\tickets\ticket\domain\Ticket;
use Viabo\tickets\ticket\domain\TicketFile;
use Viabo\tickets\ticket\domain\TicketRepository;

final readonly class TicketCreator
{
    public function __construct(
        private TicketRepository     $repository ,
        private UploadFileRepository $uploadFileRepository ,
        private EventBus             $bus
    )
    {
    }

    public function __invoke(
        string $userId ,
        string $ticketId ,
        string $supportReasonId ,
        string $supportReasonAssignedProfileId ,
        string $description ,
        array  $uploadFile
    ): void
    {
        $file = $this->getFileData($uploadFile['file'] , $ticketId);

        $ticket = Ticket::create(
            $ticketId ,
            $supportReasonId ,
            $supportReasonAssignedProfileId ,
            $description ,
            $file ,
            $userId
        );

        $this->repository->save($ticket);
        $this->storageFile($uploadFile['file'] , $ticket->files());

        $this->bus->publish(...$ticket->pullDomainEvents());

    }

    private function getFileData(mixed $file , string $ticketId): array
    {
        if (empty($file)) {
            return [];
        }

        $data = $this->uploadFileRepository->data($file);
        $data['ticketId'] = (string)(++$ticketId);
        return [$data];
    }

    private function storageFile(mixed $uploadFile , array $files): void
    {
        if (!empty($uploadFile)) {
            array_map(function (TicketFile $file) use ($uploadFile) {
                $this->uploadFileRepository->upload($uploadFile , $file->directoryPath());
            } , $files);
        }
    }

}