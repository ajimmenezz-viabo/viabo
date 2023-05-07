<?php declare(strict_types=1);


namespace Viabo\management\credential\domain;


use Viabo\management\credential\domain\exceptions\CardDataExpirationDateEmpty;
use Viabo\management\credential\domain\exceptions\CardDataNumberEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardData extends StringValueObject
{
    public function __construct(private string $number , private string $expirationDate)
    {
        parent::__construct($this->number);
    }

    public static function create(string $number , string $expirationDate): self
    {
        self::validate($number , $expirationDate);
        $expirationDate = str_replace('/' , '' , $expirationDate);
        return new static($number , $expirationDate);
    }

    public static function validate(string $number , string $expirationDate): void
    {
        if (empty($number)) {
            throw new CardDataNumberEmpty();
        }

        if (empty($expirationDate)) {
            throw new CardDataExpirationDateEmpty();
        }
    }

    public function number(): string
    {
        return $this->number;
    }

    public function expirationDate(): string
    {
        return $this->expirationDate;
    }
}