<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


final class TicketFile
{
    public function __construct(
        private TicketFileId          $id ,
        private TicketFileReferenceId $ticketId ,
        private TicketFileName        $name ,
        private TicketFileStoragePath $storagePath ,
        private TicketFileCreateDate  $createDate ,
    )
    {
    }

    public static function fromValue(array $value): static
    {
        return new static(
            TicketFileId::random() ,
            new TicketFileReferenceId($value['ticketId']) ,
            TicketFileName::create($value['name']) ,
            TicketFileStoragePath::create($value['ticketId'] , $value['name']) ,
            TicketFileCreateDate::todayDate()
        );
    }

    public function directoryPath(): string
    {
        return $this->storagePath->directoryPath();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'ticketId' => $this->ticketId->value() ,
            'name' => $this->name->value() ,
            'storagePath' => $this->storagePath->value() ,
            'createDate' => $this->createDate->value()
        ];
    }

}