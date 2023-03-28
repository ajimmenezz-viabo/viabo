<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


final readonly class LegalRepresentativeRequest
{
    public function __construct(
        private string $name,
        private string $lastname,
        private string $phone,
        private string $email,
        private string $password,
        private string $confirmPassword
    )
    {
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getConfirmPassword(): string
    {
        return $this->confirmPassword;
    }

}