<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\exceptions\CardNotExist;
use Viabo\management\shared\domain\card\CardCommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class MainCardFinder
{
    public function __construct(private CardRepository $repository)
    {
    }

    public function __invoke(CardCommerceId $commerceId): MainCardIdResponse
    {
        $filters = Filters::fromValuesEmpty([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value()] ,
            ['field' => 'main.value' , 'operator' => '=' , 'value' => '1']
        ]);

        $card = $this->repository->searchCriteria(new Criteria($filters));

        if (empty($card)) {
            throw new CardNotExist();
        }

        return new MainCardIdResponse([
            'cardId' => $card[0]->id()->value() ,
            'cardNumber' => $card[0]->number()->value()
        ]);
    }
}