<?php declare(strict_types=1);


namespace Viabo\security\authenticatorFactor\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;

final class AuthenticatorFactor extends AggregateRoot
{
    public function __construct(
        private AuthenticatorFactorId           $id,
        private AuthenticatorFactorUserId       $userId,
        private AuthenticatorFactorProvider     $provider,
        private AuthenticatorFactorSecretKey    $secretKey,
        private AuthenticatorFactorRecoveryKeys $recoveryKeys,
        private AuthenticatorFactorCreateDate   $createDate
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'userId' => $this->userId->value(),
            'provider' => $this->provider->value(),
            'secretKey' => $this->secretKey->value(),
            'recoveryKeys' => $this->recoveryKeys->value(),
            'createDate' => $this->createDate->value()
        ];
    }
}