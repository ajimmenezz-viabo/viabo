<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\application\find;


use Viabo\management\cardOperation\domain\CardOperation;
use Viabo\management\cardOperation\domain\CardOperationRepository;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\utils\DatePHP;

final readonly class CardOperationsFinder
{
    public function __construct(private CardOperationRepository $repository , private DatePHP $date)
    {
    }

    public function __invoke(
        CardNumber $cardId ,
        string     $initialDate ,
        string     $finalDate
    ): CardOperationsResponse
    {
        $finalDate = empty($finalDate) ? $this->date->dateTime() : $finalDate;
        $this->ensureFormatDates($initialDate , $finalDate);
        $operations = $this->repository->searchDateRange($cardId , $initialDate , $finalDate);
        return new CardOperationsResponse(array_map(function (CardOperation $operation) {
            $data = $operation->toArray();
            return [
                'payTransactionId' => $data['payTransactionId'] ,
                'descriptionPay' => $data['descriptionPay'] ,
                'reverseTransactionId' => $data['reverseTransactionId'] ,
                'descriptionReverse' => $data['descriptionReverse'] ,
                'concept' => $data['concept']
            ];
        } , $operations));
    }

    private function ensureFormatDates(string $initialDate , string $finalDate): void
    {
        try {
            $this->date->formatDateTime($initialDate);
            $this->date->formatDateTime($finalDate);
        } catch (\Exception) {
            throw new \DomainException('No es un formato de fecha valido' , 400);
        }
    }
}