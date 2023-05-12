<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


final class CardInformation
{
    public function __construct(
        private CardSpai    $spai ,
        private CardPaynet  $paynet ,
        private CardBalance $balance ,
        private CardBlock   $block ,
        private array       $movements = []
    )
    {
    }

    public
    static function empty(): static
    {
        return new static(
            new CardSpai('') ,
            new CardPaynet('') ,
            new CardBalance('') ,
            CardBlock::empty()
        );
    }

    public static function create(array $data): static
    {
        $information = new static(
            new CardSpai($data['Spai']) ,
            new CardPaynet($data['Paynet']) ,
            new CardBalance(strval($data['Card'][0]['Balance'])) ,
            new CardBlock($data['Card'][0]['Status'])
        );
        $information->addMovements($data['Card'][0]['Movements'][0]);
        return $information;
    }

    public function blockStatus(): CardBlock
    {
        return $this->block;
    }

    public function updateBlock(CardBlock $blockStatus): void
    {
        $this->block = $blockStatus;
    }

    private function addMovements(array $movements): void
    {
        foreach ($movements as $movement) {
            $this->movements[] = new CardInformationMovement(
                $movement['Date'] , $movement['Description'] , $movement['Amount'] , $movement['Type_Id']
            );
        }
    }

    private function movements()
    {
        return array_map(function (CardInformationMovement $movement) {
            return $movement->toArray();
        } , $this->movements);
    }

    public function toArray(): array
    {
        return [
            'spai' => $this->spai->value() ,
            'paynet' => $this->paynet->value() ,
            'balance' => $this->balance->value() ,
            'block' => $this->block->value() ,
            'movements' => $this->movements()
        ];
    }
}