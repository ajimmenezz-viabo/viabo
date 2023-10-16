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

final readonly class MainCardFinder
{
    public function __construct(private CardRepository $repository)
    {
    }

    public function __invoke(CardCommerceId $commerceId, CardPaymentProcessorId $paymentProcessorId): MainCardIdResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value()] ,
            ['field' => 'main.value' , 'operator' => '=' , 'value' => '1'],
            ['field' => 'paymentProcessorId.value' , 'operator' => '=' , 'value' => $paymentProcessorId->value()]
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