<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\shared\domain\Collection;

final class CardOperations extends Collection
{
    public function setDescriptionReverse(): void
    {
        array_map(function (CardOperation $operation) {
            $operation->setDescriptionReverse();
        } , $this->items());
    }

    public function removeOperations(array $operationKey): void
    {
        foreach ($operationKey as $value) {
            parent::remove($value);
        }
    }

    protected function type(): string
    {
        return CardOperation::class;
    }
}