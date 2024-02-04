<?php declare(strict_types=1);


namespace Viabo\tickets\message\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\tickets\message\domain\events\MessageCreatedDomainEvent;

final class Message extends AggregateRoot
{
    public function __construct(
        private MessageId            $id ,
        private MessageTicketId      $ticketId ,
        private MessageDescription   $description ,
        private MessageFiles         $files ,
        private MessageCreatedByUser $createdByUser ,
        private MessageCreateDate    $createDate
    )
    {
    }

    public static function create(
        string $messageId ,
        string $ticketId ,
        string $message ,
        array  $files ,
        string $createdByUser
    ): static
    {
        $message = new static(
            new MessageId($messageId) ,
            MessageTicketId::create($ticketId) ,
            MessageDescription::create($message) ,
            MessageFiles::fromValues($files) ,
            new MessageCreatedByUser($createdByUser) ,
            MessageCreateDate::todayDate()
        );

        $message->record(new MessageCreatedDomainEvent($message->id() , $message->toArray()));
        return $message;
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function files(): array
    {
        return $this->files->elements();
    }

    public function directoryPath(): string
    {
        return $this->files->directoryPath();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'ticketId' => $this->ticketId->value() ,
            'description' => $this->description->value() ,
            'files' => $this->files->value() ,
            'createdByUser' => $this->createdByUser->value() ,
            'createDate' => $this->createDate->value() ,
        ];
    }
}