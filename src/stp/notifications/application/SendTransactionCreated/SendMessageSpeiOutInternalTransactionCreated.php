<?php declare(strict_types=1);


namespace Viabo\stp\notifications\application\SendTransactionCreated;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\shared\domain\service\find_busines_template_file\BusinessTemplateFileFinder;
use Viabo\stp\transaction\domain\events\StpTransactionCreatedDomainEvent;

final readonly class SendMessageSpeiOutInternalTransactionCreated implements DomainEventSubscriber
{
    public function __construct(
        private EmailRepository            $repository,
        private BusinessTemplateFileFinder $templateFileFinder
    )
    {
    }

    public static function subscribedTo(): array
    {
        return [StpTransactionCreatedDomainEvent::class];
    }

    public function __invoke(StpTransactionCreatedDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $templateFile = $this->templateFileFinder->__invoke($transaction['businessId']);
        $emails = explode(',', $transaction['sourceEmail']);

        if (!$transaction['additionalData']['isInternalTransaction']) {
            return;
        }

        if (empty($emails)) {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación Spei Out - Transferencia Interna",
            "stp/$templateFile/notification/emails/spei.internal.transaction.html.twig",
            [
                'transactionType' => 'Operación SPEI Deposito',
                'sourceName' => $transaction['sourceName'],
                'sourceAccount' => $transaction['sourceAccount'],
                'sourceRfc' => $transaction['additionalData']['sourceRfc'],
                'destinationAccount' => $transaction['destinationAccount'],
                'destinationName' => $transaction['destinationName'],
                'destinationRfc' => $transaction['additionalData']['destinationRfc'],
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'reference' => $transaction['reference'],
                'date' => $transaction['createDate']
            ]
        );

        $this->repository->send($email);
    }
}