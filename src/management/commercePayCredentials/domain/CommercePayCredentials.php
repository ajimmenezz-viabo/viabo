<?php declare(strict_types=1);

namespace Viabo\management\commercePayCredentials\domain;

final readonly class CommercePayCredentials
{
    private function __construct (
        private CommercePayCredentialsId         $id,
        private CommercePayCredentialsCommerceId $commerceId,
        private CommercePayCredentialsMerchantId $merchantId,
        private CommercePayCredentialsApiKey     $apiKey,
    )
    {
    }

    public function toArray():array
    {
        return [
          'id' => $this->id->value(),
          'commerceId' => $this->commerceId->value(),
            'apiKey' => $this->apiKey->valueDecrypt(),
          'merchantId' => $this->merchantId->value()
        ];
    }
}
