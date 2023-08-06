<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

final readonly class Terminal
{
    public function __construct(
        private TerminalId            $id ,
        private TerminalCommerceId    $commerceId ,
        private TerminalValueId       $terminalId ,
        private TerminalRegisterDate  $registerDate ,
        private TerminalCreatedByUser $createdByUser ,
        private TerminalActive        $active,
        private TerminalApiData       $apiData
    ) {
    }

    public function toArray():array
    {
        return [
            'id' => $this->id->value(),
            'commerceId' => $this->commerceId->value(),
            'terminalId' => $this->terminalId->value(),
            'createdByUser' => $this->createdByUser->value(),
            'registerDate' => $this->registerDate->value(),
            'active' => $this->active->value(),
            'apiData' => json_decode($this->apiData->value(),true)
        ];
    }
}
