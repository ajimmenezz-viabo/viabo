<?php declare(strict_types=1);


namespace Viabo\business\credential\application\create;


use Viabo\business\credential\domain\CredentialCarnetKey;
use Viabo\business\credential\domain\CredentialMainKey;
use Viabo\business\credential\domain\CredentialMasterCardKey;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCredentialCommandHandler implements CommandHandler
{
    public function __construct(private CredentialCreator $creator)
    {
    }

    public function __invoke(CreateCredentialCommand $command): void
    {
        $commerceId = CommerceId::create($command->commerceId);
        $credentialKey = CredentialMainKey::create($command->commerceKey);
        $credentialMasterCardKey = new CredentialMasterCardKey($command->masterCardKey);
        $credentialCarnetKey = new CredentialCarnetKey($command->carnetKey);

        ($this->creator)($commerceId , $credentialKey , $credentialMasterCardKey , $credentialCarnetKey);
    }
}