<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\utils\NumberFormat;
use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\transaction\domain\exceptions\TransactionInsufficientBalance;
use Viabo\spei\transaction\domain\services\StatusFinder;
use Viabo\spei\transaction\domain\services\TransactionTypeFinder;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class SpeiPaymentProcessor
{

    public function __construct(
        private TransactionRepository $repository,
        private StpRepository         $stpRepository,
        private TransactionTypeFinder $typeFinder,
        private StatusFinder          $statusFinder,
        private EventBus              $bus
    )
    {
    }

    public function __invoke(
        string $userId,
        array  $stpAccount,
        array  $externalAccounts,
        string $concept
    ): void
    {
        $this->ensureSufficientBalance($stpAccount['balance'], $externalAccounts);
        $this->registerTransaction($userId, $concept, $stpAccount, $externalAccounts);
    }

    private function ensureSufficientBalance(float $balance, array $externalAccounts): void
    {
        $total = array_sum(array_map(function (array $externalAccount) {
            return NumberFormat::float($externalAccount['amount']);
        }, $externalAccounts));

        if ($total > $balance) {
            throw new TransactionInsufficientBalance();
        }

    }

    private function registerTransaction(
        string $userId,
        string $concept,
        array  $stpAccount,
        array  $externalAccounts
    ): void
    {
        $outType = $this->typeFinder->speiOutType();
        $inTransitStatus = $this->statusFinder->inTransit();

        array_map(function (array $externalAccount) use (
            $stpAccount, $concept, $userId, $outType, $inTransitStatus
        ) {
            $transaction = Transaction::create(
                $outType,
                $inTransitStatus,
                $externalAccount['transactionId'],
                $concept,
                $stpAccount['number'],
                $stpAccount['acronym'],
                $stpAccount['company'],
                $externalAccount['interbankCLABE'],
                $externalAccount['beneficiary'],
                $externalAccount['email'],
                $externalAccount['bankCode'],
                $externalAccount['amount'],
                $userId
            );
            $transaction->setStpKeys($stpAccount['key'], $stpAccount['url']);
            $stpData = $this->stpRepository->processPayment($transaction);
            $transaction->updateStpData($stpData);
            $transaction->eventCreated();
            $this->repository->save($transaction);

            $this->bus->publish(...$transaction->pullDomainEvents());
        },
            $externalAccounts);
    }
}