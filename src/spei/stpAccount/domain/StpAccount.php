<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


final class StpAccount
{
    public function __construct(
        private StpAccountId      $id ,
        private StpAccountNumber  $number ,
        private StpAccountAcronym $acronym ,
        private StpAccountCompany $company ,
        private StpAccountKey     $key ,
        private StpAccountUrl     $url ,
        private StpAccountActive  $active
    )
    {
    }

    public function number(): string
    {
        return $this->number->decrypt();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'number' => $this->number->value() ,
            'acronym' => $this->acronym->value() ,
            'company' => $this->company->value() ,
            'key' => $this->key->value() ,
            'url' => $this->url->value() ,
            'active' => $this->active->value()
        ];
    }

    public function decrypt(): array
    {
        return [
            'id' => $this->id->value() ,
            'number' => $this->number->decrypt() ,
            'acronym' => $this->acronym->value() ,
            'company' => $this->company->value() ,
            'key' => $this->key->decrypt() ,
            'url' => $this->url->decrypt() ,
            'active' => $this->active->value()
        ];
    }
}