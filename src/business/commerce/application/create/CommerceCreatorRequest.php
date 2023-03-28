<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


final readonly class CommerceCreatorRequest
{
    public function __construct(
        private string $name,
        private string $lastname,
        private string $phone,
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

    public function getPassword(): string
    {
        return $this->password;
    }

    public function getConfirmPassword(): string
    {
        return $this->confirmPassword;
    }

}