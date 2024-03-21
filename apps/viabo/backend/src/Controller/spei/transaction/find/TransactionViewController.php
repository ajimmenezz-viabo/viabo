<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\spei\transaction\find;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\transaction\application\find\TransactionQuery;

final readonly class TransactionViewController extends ApiController
{

    public function __invoke(string $transactionId , Request $request , Environment $twig): Response
    {
        try {
            $transaction = $this->ask(new TransactionQuery($transactionId));
            $data =  [
                'transactionType' => 'Operación SPEI Deposito',
                'amount' => $transaction->data['amountMoneyFormat'],
                'concept' => $transaction->data['concept'],
                'sourceAccount' => $transaction->data['sourceAccount'],
                'destinationAccount' => $transaction->data['destinationAccount'],
                'reference' => $transaction->data['trackingKey'],
                'date' => $transaction->data['createDate']
            ];
            $html = $twig->render('spei/notification/emails/spei.out.external.transaction.html.twig' , $data);
            return new Response($html);
        } catch (\DomainException) {
            $html = $twig->render('spei/notification/emails/transaction.spei.not.exist.html.twig');
            return new Response($html);
        }
    }
}