<?php declare(strict_types=1);


namespace Viabo\management\paymentProcessor\domain;


interface PaymentProcessorRepository
{
    public function searchAll(): array;
}