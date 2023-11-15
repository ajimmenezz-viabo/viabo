<?php


namespace Viabo\shared\domain\email;


final readonly class Email
{
    public function __construct(
        private array  $to ,
        private string $subject ,
        private string $htmlTemplate ,
        private array  $context
    )
    {
    }

    public function content(): array
    {
        return [
            $this->to ,
            $this->subject ,
            $this->htmlTemplate ,
            $this->context
        ];
    }
}