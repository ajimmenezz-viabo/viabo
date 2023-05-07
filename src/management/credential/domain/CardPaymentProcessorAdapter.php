<?php declare(strict_types=1);


namespace Viabo\management\credential\domain;


interface CardPaymentProcessorAdapter
{
    public function register(CardCredential $credential): void;
}