<?php declare(strict_types=1);


namespace Viabo\shared\domain\utils;


final class NumberFormat
{
    public static function money(float $number): string
    {
        $formatted_number = number_format($number , 2);
        return '$' . $formatted_number;
    }
}