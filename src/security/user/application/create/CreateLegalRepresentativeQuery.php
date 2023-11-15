<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\shared\domain\bus\query\Query;

final readonly class CreateLegalRepresentativeQuery implements Query
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