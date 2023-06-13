<?php declare(strict_types=1);


namespace Viabo\shared\domain\qr;


interface QRCodeAdapter
{
    public function generator(string $value): string;

    public function generatorBarcode(string $value): string;

}