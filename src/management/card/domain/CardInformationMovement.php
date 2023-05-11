<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


final class CardInformationMovement
{
    private const MOVEMENT_TYPE = ['1' => 'Ingreso' , '2' => 'gasto'];

    public function __construct(
        private string $date ,
        private string $description ,
        private int    $amount ,
        private string $type
    )
    {
    }

    public function toArray(): array
    {
        return [
            'date' => $this->date ,
            'description' => $this->description ,
            'amount' => "$this->amount.00" ,
            'type' => self::MOVEMENT_TYPE[$this->type]
        ];
    }
}