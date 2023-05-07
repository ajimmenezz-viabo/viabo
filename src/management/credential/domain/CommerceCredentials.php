<?php declare(strict_types=1);


namespace Viabo\management\credential\domain;


use Viabo\management\credential\domain\exceptions\CommerceCredentialsClientKeyEmpty;
use Viabo\management\credential\domain\exceptions\CommerceCredentialsKeyCompanyEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceCredentials extends StringValueObject
{
    public function __construct(
        private string $mainKey ,
        private string $masterCardKey ,
        private string $carnetKey
    )
    {
        parent::__construct($this->mainKey);
    }

    public static function create(
        string $mainKey ,
        string $masterCardKey ,
        string $carnetKey
    ): static
    {
        static::validate($mainKey , $masterCardKey , $carnetKey);
        return new static($mainKey , $masterCardKey , $carnetKey);
    }

    private static function validate(
        string $mainKey ,
        string $masterCardKey ,
        string $carnetKey
    ): void
    {
        if (empty($mainKey)) {
            throw new CommerceCredentialsClientKeyEmpty();
        }

        if (empty($masterCardKey) && empty($carnetKey)) {
            throw new CommerceCredentialsKeyCompanyEmpty();
        }
    }

    public function clientKey(): string
    {
        return $this->mainKey;
    }

    public function companyKey(): string
    {
        return !empty($this->masterCardKey) ? $this->masterCardKey : $this->carnetKey;
    }
}