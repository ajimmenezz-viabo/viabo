<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\management\conciliation\domain\Conciliation;
use Viabo\management\conciliation\domain\ConciliationAmount;
use Viabo\management\conciliation\domain\ConciliationEmails;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\conciliation\domain\ConciliationSpei;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class ConciliationCreator
{
    public function __construct(private ConciliationRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(
        CardId $cardId , ConciliationAmount $amount , ConciliationSpei $spei , ConciliationEmails $emails
    ): ConciliationResponse
    {
        $conciliation = Conciliation::create($cardId , $amount , $spei , $emails);

        $this->repository->save($conciliation);

        $this->bus->publish(...$conciliation->pullDomainEvents());

        return new ConciliationResponse(['referenceNumber' => $conciliation->referenceNumber()->value()]);
    }

}