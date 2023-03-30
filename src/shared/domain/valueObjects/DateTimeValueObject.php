<?php declare(strict_types=1);


namespace Viabo\shared\domain\valueObjects;


use Viabo\shared\domain\utils\DatePHP;

abstract class DateTimeValueObject
{
    public function __construct(protected ?string $value, protected $date = new DatePHP())
    {
        $this->value = $this->validate($value);
    }

    public static function todayDate(): string
    {
        $date = new DatePHP();
        return $date->dateTime();
    }

    public function value(): string
    {
        return empty($this->value) ? '' : $this->date->formatDateTime($this->value);
    }

    protected function setDate(): void
    {
        $this->date = new DatePHP();
    }

    private function validate(?string $value): ?string
    {
        if ($value === '0000-00-00 00:00:00') {
            $value = '';
        }
        return $value;
    }
}
