<?php declare(strict_types=1);


namespace Viabo\management\card\application\update;


use Viabo\management\card\domain\CardCVV;
use Viabo\management\card\domain\CardExpirationDate;
use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\exceptions\CardDemoDataWrong;
use Viabo\management\card\domain\services\CardFinder;
use Viabo\management\shared\domain\card\CardId;

final readonly class CardDemoUpdater
{
    public function __construct(private CardRepository $repository, private CardFinder $finder)
    {
    }

    public function __invoke(CardId $cardId , CardCVV $cvv , CardExpirationDate $expiration): void
    {
        $card = $this->finder->__invoke($cardId);

        if($card->isEmptyCVV()){
            $card->updateCVV($cvv);
            $this->repository->update($card);
        }

        if($card->hasDifferentData($cvv, $expiration)){
            throw new CardDemoDataWrong();
        }
    }
}
