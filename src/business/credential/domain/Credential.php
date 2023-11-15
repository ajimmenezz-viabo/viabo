<?php declare(strict_types=1);


namespace Viabo\business\credential\domain;


use Viabo\business\credential\domain\events\CommerceCredentialCreatedDomainEvent;
use Viabo\business\credential\domain\exceptions\CredentialPaymentProcessorEmpty;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Credential extends AggregateRoot
{
    public function __construct(
        private CredentialId            $id ,
        private CommerceId              $commerceId ,
        private CredentialMainKey       $mainKey ,
        private CredentialMasterCardKey $masterCardKey ,
        private CredentialCarnetKey     $carnetKey ,
        private CredentialRegisterDate  $registerDate
    )
    {
    }

    public static function create(
        CommerceId              $commerceId ,
        CredentialMainKey       $mainKey ,
        CredentialMasterCardKey $credentialMasterCardKey ,
        CredentialCarnetKey     $credentialCarnetKey
    ): static
    {
        $credential = new static(
            CredentialId::random() ,
            $commerceId ,
            $mainKey ,
            $credentialMasterCardKey ,
            $credentialCarnetKey ,
            CredentialRegisterDate::todayDate()
        );
        $credential->ensureKeys();
        //No se manda el evento ya  que todavia no hay interfaz para realizarlo
        //Ya que se requiere que se inicie session para poder registrar el usuario
        //que registro la claves de acceso.
//        $credential->record(new CommerceCredentialCreatedDomainEvent(
//            $credential->id->value() , $credential->toArray()
//        ));

        return $credential;
    }

    public function commerce(): CommerceId
    {
        return $this->commerceId;
    }

    private function ensureKeys(): void
    {
        if ($this->masterCardKey->isEmpty() && $this->carnetKey->isEmpty()) {
            throw new CredentialPaymentProcessorEmpty();
        }
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'commerceId' => $this->commerceId->value() ,
            'mainKey' => $this->mainKey->valueDecrypt() ,
            'masterCardKey' => $this->masterCardKey->valueDecrypt() ,
            'carnetKey' => $this->carnetKey->valueDecrypt() ,
            'registerDate' => $this->registerDate->value()
        ];
    }
}