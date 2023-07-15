<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\CardView;
use Viabo\management\shared\domain\card\CardCommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class PaymentProcessorsOfCommerceFinder
{
    public function __construct(private CardRepository $repository)
    {
    }

    public function __invoke(CardCommerceId $commerceId): CommerceCardsResponse
    {
        $enabledStatus = '5';
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value()] ,
            ['field' => 'statusId' , 'operator' => '=' , 'value' => $enabledStatus] ,
            ['field' => 'main' , 'operator' => '=' , 'value' => '1']
        ]);
        $cards = $this->repository->searchView(new Criteria($filters));

        return new CommerceCardsResponse(array_map(function (CardView $card) {
            $data = $card->toArray();
            return ['id' => $data['paymentProcessorId'] , 'name' => $data['paymentProcessorName']];
        } , $cards));
    }
}