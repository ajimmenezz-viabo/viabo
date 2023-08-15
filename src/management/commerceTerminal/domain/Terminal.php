<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

final readonly class Terminal
{
    public function __construct(
        private TerminalId            $id,
        private TerminalCommerceId    $commerceId,
        private TerminalMerchantId    $merchantId,
        private TerminalValueId       $terminalId,
        private TerminalApiData       $apiData,
        private TerminalCreatedByUser $createdByUser,
        private TerminalName          $name,
        private TerminalTypeId        $type,
        private TerminalRegisterDate  $registerDate,
        private TerminalActive        $active
    ) {
    }

    public function toArray():array
    {
        return [
            'id' => $this->id->value(),
            'commerceId' => $this->commerceId->value(),
            'merchantId' => $this->merchantId->value(),
            'terminalId' => $this->terminalId->value(),
            'apiData' => json_decode($this->apiData->value(),true),
            'createdByUser' => $this->createdByUser->value(),
            'name' => $this->name->value(),
            'typeId' => $this->type->value(),
            'registerDate' => $this->registerDate->value(),
            'active' => $this->active->value()
        ];
    }
}
