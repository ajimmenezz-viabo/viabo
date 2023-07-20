<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\create;


use Viabo\business\commerceUser\domain\CommerceUserKey;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\management\card\application\find\CardQuery;
use Viabo\shared\domain\bus\command\CommandHandler;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CreateCommerceUserCommandHandler implements CommandHandler
{
    public function __construct(private CommerceUserCreator $creator , private QueryBus $queryBus)
    {
    }

    public function __invoke(CreateCommerceUserCommand $command): void
    {
        $userId = CommerceUserKey::create($command->userId);

        foreach ($command->cards as $card) {
            $cardData = $this->queryBus->ask(new CardQuery($card['id']));
            $commerceId = CommerceId::create($cardData->cardData['commerceId']);
            $this->creator->__invoke($commerceId , $userId);
        }

    }
}