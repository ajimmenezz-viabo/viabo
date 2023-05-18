<?php declare(strict_types=1);


namespace Viabo\management\credential\domain\services;


use Viabo\management\credential\domain\CardCredential;
use Viabo\management\credential\domain\CardCredentialId;
use Viabo\management\credential\domain\CardCredentialRepository;
use Viabo\management\credential\domain\exceptions\CardCredentialNotExist;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CardCredentialFinder
{
    public function __construct(private CardCredentialRepository $repository)
    {
    }

    public function __invoke(CardCredentialId $cardCredentialId): CardCredential
    {
        $filters = Filters::fromValues([
            ['field' => 'cardId' , 'operator' => '=' , 'value' => $cardCredentialId->value()]
        ]);
        $credential = $this->repository->searchCriteria(new Criteria($filters));

        if (empty($credential)) {
            throw new CardCredentialNotExist();
        }

        return $credential[0];
    }
}