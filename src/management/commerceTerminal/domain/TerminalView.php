<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

final readonly class TerminalView
{
    public function __construct(
        public string $id,
        public string $commerceId,
        public string $terminalId,
        public string $apiData,
        public string $createdByUser,
        public string $name,
        public string $typeId,
        public string $typeName,
        public string $registerDate,
        public string $active
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'commerceId' => $this->commerceId,
            'terminalId' => $this->terminalId,
            'name' => $this->name,
            'typeId' => $this->typeId,
            'typeName' => $this->typeName,
        ];
    }
}
