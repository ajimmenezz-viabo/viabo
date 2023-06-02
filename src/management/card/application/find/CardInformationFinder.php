<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\CardClientKey;
use Viabo\management\card\domain\CardPassword;
use Viabo\management\card\domain\CardUser;
use Viabo\management\card\domain\services\CardFinder as CardFinderService;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;

final readonly class CardInformationFinder
{
    public function __construct(
        private CardFinderService       $finder ,
        private PaymentProcessorAdapter $adapter
    )
    {
    }

    public function __invoke(
        CardId        $cardId ,
        CardClientKey $clientKey ,
        CardUser      $user ,
        CardPassword  $password
    ): CardResponse
    {
        $card = $this->finder->__invoke($cardId);
        $card->registerCredentials($clientKey , $user , $password);
        $data = $this->adapter->searchCardInformation($card->credentials());
        $nipData = $this->adapter->searchCardNip($card);
        $data['Nip'] = $nipData['TicketMessage'];
        $card->registerInformation($data);

        return new CardResponse($card->toInformationArray());
    }
}