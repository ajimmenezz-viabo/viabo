<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


final readonly class LegalRepresentativeRequest
{
    public function __construct(
        public string $name,
        public string $lastname,
        public string $phone,
        public string $email,
        public string $password,
        public string $confirmPassword
    )
    {
    }

}