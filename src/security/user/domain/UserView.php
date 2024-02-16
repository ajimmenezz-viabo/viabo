<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


final readonly class UserView
{
    public function __construct(
        private string      $id,
        private string      $profileId,
        private string      $name,
        private string      $lastname,
        private string      $phone,
        private string      $email,
        private string      $password,
        private string      $register,
        private string      $active,
        private string      $profileName,
        private string|null $permissionModules,
        private string|null $actionsModules,
        private string      $urlInit
    )
    {
    }

    public function permissions(): array
    {
        return [
            'permissionModules' => $this->permissionModules ?? '',
            'actionsModules' => $this->actionsModules ?? ''
        ];
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => "$this->name $this->lastname",
            'profileId' => $this->profileId,
            'profile' => $this->profileName,
            'email' => $this->email,
            'urlInit' => $this->urlInit
        ];
    }

}
