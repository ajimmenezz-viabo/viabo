<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\utils\NumberFormat;
use Viabo\spei\stpAccount\domain\StpRepository;
use Viabo\spei\transaction\domain\exceptions\TransactionInsufficientBalance;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class SpeiPaymentProcessor
{

    public function __construct(
        private TransactionRepository $repository ,
        private StpRepository         $stpRepository ,
        private EventBus              $bus
    )
    {
    }

    public function __invoke(
        string $userId ,
        array  $stpAccount ,
        array  $externalAccounts ,
        string $concept
    ): void
    {
        $this->ensureSufficientBalance($stpAccount['balance'] , $externalAccounts);
        $this->registerTransaction($userId , $concept , $stpAccount , $externalAccounts);
    }

    private function ensureSufficientBalance(string $balance , array $externalAccounts): void
    {
        $balance = NumberFormat::float($balance);
        $total = array_sum(array_map(function (array $externalAccount) {
            return NumberFormat::float($externalAccount['amount']);
        } , $externalAccounts));

        if ($total > $balance) {
            throw new TransactionInsufficientBalance();
        }

    }

    private function registerTransaction(
        string $userId ,
        string $concept ,
        array  $stpAccount ,
        array  $externalAccounts
    ): void
    {
        array_map(function (array $externalAccount) use ($stpAccount , $concept , $userId) {
            $transaction = Transaction::create(
                $externalAccount['transactionId'] ,
                $concept ,
                $stpAccount['number'] ,
                $stpAccount['company'] ,
                $externalAccount['interbankCLABE'] ,
                $externalAccount['beneficiary'] ,
                $externalAccount['email'] ,
                $externalAccount['amount'] ,
                $userId
            );
            $transaction->setStpKeys($stpAccount['key'] , $stpAccount['url']);
            $this->stpRepository->processPayment($transaction);
            $this->repository->save($transaction);

            $this->bus->publish(...$transaction->pullDomainEvents());
        } , $externalAccounts);
    }
}