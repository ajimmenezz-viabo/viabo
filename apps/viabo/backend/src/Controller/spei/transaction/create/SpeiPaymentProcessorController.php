<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\transaction\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\commerceUser\application\find\CommerceQueryByUser;
use Viabo\backoffice\company\application\find\CommerceQuery;
use Viabo\backoffice\company\application\find\CommerceQueryByLegalRepresentative;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\transaction\application\create\SpeiProcessPaymentsCommand;
use Viabo\spei\transaction\application\find\TransactionUrlQuery;


final readonly class SpeiPaymentProcessorController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();
//            $this->dispatch(new ValidateGoogleAuthenticatorCommand(
//                $tokenData['id'],
//                $tokenData['name'],
//                $data['googleAuthenticatorCode']
//            ));
            $destinationsAccounts = $this->addTransactionId($data['destinationsAccounts']);
            $this->dispatch(new SpeiProcessPaymentsCommand(
                $tokenData['id'],
                $data['originBankAccount'],
                $destinationsAccounts,
                $data['concept'],
                $data['internalTransaction']
            ));

            return new JsonResponse($this->searchTransactionUrls($destinationsAccounts));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    private function addTransactionId(array $collection): array
    {
        return array_map(function (array $data) {
            $data['transactionId'] = $this->generateUuid();
            return $data;
        }, $collection);
    }

    private function searchTransactionUrls(array $destinationsAccounts): array
    {
        return array_map(function (array $destinationsAccount) {
            $transaction = $this->ask(new TransactionUrlQuery($destinationsAccount['transactionId']));
            return $transaction->data;
        }, $destinationsAccounts);
    }
}