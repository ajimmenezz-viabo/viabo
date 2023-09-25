<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\Card;
use Viabo\management\card\domain\CardPaymentProcessorId;
use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\CardView;
use Viabo\management\card\domain\exceptions\CardNotExist;
use Viabo\management\shared\domain\card\CardCommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class MasterCardsFinderByCommerce
{
    public function __construct(private CardRepository $repository)
    {
    }

    public function __invoke(CardCommerceId $commerceId): CardsResponse
    {
        $filters = Filters::fromValuesEmpty([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value()] ,
            ['field' => 'main' , 'operator' => '=' , 'value' => '1'] ,
            ['field' => 'active' , 'operator' => '=' , 'value' => '1']
        ]);
        $cards = $this->repository->searchView(new Criteria($filters));

        return new CardsResponse(array_map(function (CardView $card) {
            return $card->toArray();
        } , $cards));
    }
}