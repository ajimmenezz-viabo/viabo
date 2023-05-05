<?php declare(strict_types=1);


namespace Viabo\business\credential\application\create;


use Viabo\business\commerce\application\find\FindCommerceQuery;
use Viabo\business\credential\domain\Credential;
use Viabo\business\credential\domain\CredentialCarnetKey;
use Viabo\business\credential\domain\CredentialMainKey;
use Viabo\business\credential\domain\CredentialMasterCardKey;
use Viabo\business\credential\domain\CredentialRepository;
use Viabo\business\credential\domain\exceptions\CredentialCommerceInformal;
use Viabo\business\credential\domain\services\CredentialValidator;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CredentialCreator
{
    public function __construct(
        private CredentialRepository $repository ,
        private QueryBus             $queryBus ,
        private EventBus             $bus ,
        private CredentialValidator  $validator
    )
    {
    }

    public function __invoke(
        CommerceId              $commerceId ,
        CredentialMainKey       $commerceKey ,
        CredentialMasterCardKey $credentialMasterCardKey ,
        CredentialCarnetKey     $credentialCarnetKey
    ): void
    {
        $this->ensureExist($commerceId);

        $credential = Credential::create($commerceId , $commerceKey , $credentialMasterCardKey , $credentialCarnetKey);

        $this->validator->validateNotExist($credential);

        $this->repository->save($credential);

        $this->bus->publish(...$credential->pullDomainEvents());
    }

    private function ensureExist(CommerceId $commerceId): void
    {
        $legalRepresentative = '';
        $data = $this->queryBus->ask(new FindCommerceQuery($commerceId->value() , $legalRepresentative));

        if ($this->isInformal($data->commerce)) {
            throw new CredentialCommerceInformal();
        }
    }

    private function isInformal(array $commerce): bool
    {
        $informalType = '2';
        return $commerce['type'] === $informalType;
    }
}