<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\CardCVV;
use Viabo\management\card\domain\CardExpirationDate;
use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\exceptions\CardDemoHasOwner;
use Viabo\management\card\domain\exceptions\CardDemoNotExist;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CardDemoFinder
{
    public function __construct(private CardRepository $repository)
    {
    }

    public function __invoke(
        CardNumber $cardNumber , CardCVV $cvv , CardExpirationDate $expiration
    ): CardResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'number' , 'operator' => '=' , 'value' => $cardNumber->value()] ,
            ['field' => 'expirationDate.value' , 'operator' => '=' , 'value' => $expiration->value()]
        ]);
        $card = $this->repository->searchCriteria(new Criteria($filters));

        if (empty($card)) {
            throw new CardDemoNotExist();
        }

        if($card[0]->hasOwner()){
            throw new CardDemoHasOwner();
        }

        return new CardResponse([$card[0]->id()->value()]);
    }
}