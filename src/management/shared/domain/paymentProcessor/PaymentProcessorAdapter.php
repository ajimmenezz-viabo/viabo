<?php declare(strict_types=1);


namespace Viabo\management\shared\domain\paymentProcessor;


use Viabo\management\card\domain\CardCredentials;
use Viabo\management\credential\domain\CardCredential;

interface PaymentProcessorAdapter
{
    public function register(CardCredential $credential): void;

    public function searchCardInformation(CardCredentials $credential): array;

}