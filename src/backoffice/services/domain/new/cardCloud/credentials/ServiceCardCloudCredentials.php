<?php declare(strict_types=1);

namespace Viabo\backoffice\services\domain\new\cardCloud\credentials;

use Viabo\shared\domain\utils\Crypt;

class ServiceCardCloudCredentials
{
    public function __construct(
        private string $uuid,
        private string $businessId,
        private string $apiUrl,
        private string $user,
        private string $password,
        private string $active
    )
    {
    }

    public function toArray(): array
    {
        return [
            'uuid' => $this->uuid,
            'businessId' => $this->businessId,
            'apiUrl' => $this->decrypt($this->apiUrl),
            'user' => $this->decrypt($this->user),
            'password' => $this->decrypt($this->password),
            'active' => $this->active,
        ];
    }

    private function decrypt(string $value): string
    {
        return Crypt::decrypt($value);
    }
}
