<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\application\find;


use Viabo\management\cardOperation\domain\CardOperation;
use Viabo\management\cardOperation\domain\CardOperationRepository;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\utils\DatePHP;

final readonly class CardOperationsFinder
{
    public function __construct(private CardOperationRepository $repository)
    {
    }

    public function __invoke(
        CardNumber $cardId ,
        string     $initialDate ,
        string     $finalDate
    ): CardOperationsResponse
    {
        $this->ensureFormatDates($initialDate , $finalDate);
        $operations = $this->repository->searchDateRange($cardId , $initialDate , $finalDate);
        return new CardOperationsResponse(array_map(function (CardOperation $operation) {
            $data = $operation->toArray();
            return [
                'payTransactionId' => $data['payTransactionId'] ,
                'descriptionPay' => $data['descriptionPay'] ,
                'reverseTransactionId' => $data['reverseTransactionId'] ,
                'descriptionReverse' => $data['descriptionReverse']
            ];
        } , $operations));
    }

    private function ensureFormatDates(string $initialDate , string $finalDate): void
    {
        try {
            $date = new DatePHP();
            $date->formatDateTime($initialDate);
            $date->formatDateTime($finalDate);
        } catch (\Exception) {
            throw new \DomainException('No es un formato de fecha' , 400);
        }
    }
}