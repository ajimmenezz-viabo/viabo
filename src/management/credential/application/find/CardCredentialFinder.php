<?php declare(strict_types=1);


namespace Viabo\management\credential\application\find;


use Viabo\management\credential\domain\CardCredentialId;
use Viabo\management\credential\domain\services\CardCredentialFinder as CardCredentialFinderService;

final readonly class CardCredentialFinder
{
    public function __construct(private CardCredentialFinderService $finder)
    {
    }

    public function __invoke(CardCredentialId $cardId): CardCredentialResponse
    {
        $credential = $this->finder->__invoke($cardId);
        return new CardCredentialResponse($credential->toArray());

    }

}