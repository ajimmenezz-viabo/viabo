<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


final class CardInformation
{
    public function __construct(
        private CardSpai    $spai ,
        private CardPaynet  $paynet ,
        private CardBalance $balance ,
        private CardBlock   $block ,
        private CardNip     $nip
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
            CardBlock::empty() ,
            new CardNip('')
        );
    }

    public static function create(array $data): static
    {
        return new static(
            new CardSpai($data['Spai']) ,
            new CardPaynet($data['Paynet']) ,
            new CardBalance(strval($data['Card'][0]['Balance'])) ,
            new CardBlock($data['Card'][0]['Status']) ,
            new CardNip($data['Nip'])
        );
    }

    public function blockStatus(): CardBlock
    {
        return $this->block;
    }

    public function updateBlock(CardBlock $blockStatus): void
    {
        $this->block = $blockStatus;
    }

    public function toArray(): array
    {
        return [
            'spai' => $this->spai->value() ,
            'paynet' => $this->paynet->value() ,
            'balance' => $this->balance->value() ,
            'block' => $this->block->value() ,
            'nip' => $this->nip->value()
        ];
    }
}