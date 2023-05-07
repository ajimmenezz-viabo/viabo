<?php declare(strict_types=1);


namespace Viabo\management\credential\domain\services;


use Viabo\management\credential\domain\CardCredential;
use Viabo\management\credential\domain\CardCredentialRepository;
use Viabo\management\credential\domain\exceptions\CardCredentialExist;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CardCredentialValidator
{
    public function __construct(private CardCredentialRepository $repository)
    {
    }

    public function ensureExist(CardCredential $credential): void
    {
        $filters = Filters::fromValues([
            ['field' => 'cardId' , 'operator' => '=' , 'value' => $credential->cardId()->value() ]
        ]);
        $credential = $this->repository->searchCriteria(new Criteria($filters));

        if(!empty($credential)){
            throw new CardCredentialExist();
        }
    }


}