<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


final readonly class LegalRepresentativeFinderRequest
{
    public function __construct(private string $username)
    {
    }

    public function getUsername(): string
    {
        return $this->username;
    }

}