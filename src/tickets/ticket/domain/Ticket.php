<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\tickets\ticket\domain\events\TicketCreatedDomainEvent;

final class Ticket extends AggregateRoot
{

    public function __construct(
        private TicketId                 $id ,
        private TicketStatusId           $statusId ,
        private TicketSupportReasonId    $supportReasonId ,
        private TicketApplicantProfileId $applicantProfileId ,
        private TicketAssignedProfileId  $assignedProfileId ,
        private TicketDescription        $description ,
        private TicketCreatedByUser      $createdByUser ,
        private TicketCreateDate         $createDate ,
        private TicketActive             $active
    )
    {
    }

    public static function create(
        string $ticketId ,
        string $supportReasonId ,
        string $userProfileId ,
        string $assignedProfileId ,
        string $description ,
        string $userId
    ): static
    {

        $ticket = new static(
            TicketId::create($ticketId) ,
            TicketStatusId::new() ,
            TicketSupportReasonId::create($supportReasonId) ,
            TicketApplicantProfileId::create($userProfileId) ,
            TicketAssignedProfileId::create($assignedProfileId) ,
            TicketDescription::create($description) ,
            new TicketCreatedByUser($userId) ,
            TicketCreateDate::todayDate() ,
            TicketActive::enable()
        );

        $ticket->record(new TicketCreatedDomainEvent($ticket->id() , $ticket->toArray()));
        return $ticket;
    }

    public function id(): string
    {
        return $this->id->value();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'statusId' => $this->statusId->value() ,
            'supportReasonId' => $this->supportReasonId->value() ,
            'applicantProfileId' => $this->applicantProfileId->value() ,
            'assignedProfileId' => $this->assignedProfileId->value() ,
            'description' => $this->description->value() ,
            'createdByUser' => $this->createdByUser->value() ,
            'createDate' => $this->createDate->value() ,
            'active' => $this->active->value()
        ];
    }
}