<?php declare(strict_types=1);

namespace Viabo\management\terminals\domain;

final readonly class Terminal
{
    public function __construct(
        private TerminalId $id,
        private TerminalCommerceId $commerceId,
        private TerminalSerial $serial,
        private TerminalType $type,
        private TerminalPrincipal $principal,
        private TerminalAssignmentDate $assignmentDate,
        private TerminalRegisterDate $registerDate,
        private TerminalActive $active
    ) {
    }

    public function toArray():array
    {
        return [
            'id' => $this->id->value(),
            'commerceId' => $this->commerceId->value(),
            'serial' => $this->serial->value(),
            'type' => $this->type->value(),
            'principal' => $this->principal->value(),
            'assignmentDate' => $this->assignmentDate->value(),
            'registerDate' => $this->registerDate->value(),
            'active' => $this->active->value()
        ];
    }
}
