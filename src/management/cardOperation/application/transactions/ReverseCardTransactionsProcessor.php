<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\application\transactions;


use Viabo\management\cardOperation\domain\CardOperation;
use Viabo\management\cardOperation\domain\CardOperationRepository;
use Viabo\management\cardOperation\domain\CardOperations;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class ReverseCardTransactionsProcessor
{
    public function __construct(
        private CardOperationRepository $repository ,
        private PaymentProcessorAdapter $adapter ,
        private EventBus                $bus
    )
    {
    }

    public function __invoke(): void
    {
        $operations = $this->searchCardOperations();
        $operations->setDescriptionReverse();
        $this->adapter->transactionReverse($operations);
        $this->repository->update($operations);

        $this->publish($operations);
    }

    private function searchCardOperations(): CardOperations
    {
        $filters = Filters::fromValues([
            ['field' => 'active.value' , 'operator' => '=' , 'value' => '1']
        ]);

        $operations = $this->repository->searchCriteria(new Criteria($filters));
        return new CardOperations($operations);
    }

    private function publish(CardOperations $operations): void
    {
        array_map(function (CardOperation $operation) {
            $operation->setEventUpdate();
            $this->bus->publish(...$operation->pullDomainEvents());
        } , $operations->getIterator()->getArrayCopy());
    }
}