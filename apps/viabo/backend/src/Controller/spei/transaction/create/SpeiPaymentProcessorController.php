<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\transaction\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\business\commerceUser\application\find\CommerceQueryByUser;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\bank\application\find\BankQuery;
use Viabo\spei\externalAccount\application\find\ExternalAccountQuery;
use Viabo\spei\stpAccount\application\find\AccountBalanceQuery;
use Viabo\spei\stpAccount\application\find\StpAccountQuery;
use Viabo\spei\transaction\application\create\SpeiProcessPaymentsCommand;
use Viabo\spei\transaction\application\find\TransactionUrlQuery;


final readonly class SpeiPaymentProcessorController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $this->opensslDecrypt($request->toArray());
            $commerce = $this->searchCommerce($tokenData['id']);
            $user = $this->ask(new FindUserQuery($tokenData['id'] , ''));
            $externalAccounts = $this->searchExternalAccountsData($data['externalAccounts']);
            $stpAccount = $this->searchStpAccount(
                $tokenData['profile'] ,
                $user->data['stpAccountId'] ,
                $commerce['stpAccountId']
            );
            $this->dispatch(new SpeiProcessPaymentsCommand(
                $tokenData['id'] ,
                $stpAccount ,
                $externalAccounts ,
                $data['concept']
            ));

            return new JsonResponse($this->searchTransactionUrls($externalAccounts));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }

    private function searchCommerce(string $userId): array
    {
        try {
            $commerce = $this->ask(new CommerceQueryByUser($userId));
            $commerceId = $commerce->data['commerceId'];
        } catch (\DomainException) {
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($userId));
            $commerceId = $commerce->data['id'];
        }

        $commerce = $this->ask(new CommerceQuery($commerceId));
        return $commerce->data;
    }

    private function searchExternalAccountsData(array $externalAccounts): array
    {
        return array_map(function (array $externalAccount) {
            $account = $this->ask(new ExternalAccountQuery($externalAccount['id']));
            $bank = $this->ask(new BankQuery($account->data['bankId']));
            $externalAccount['interbankCLABE'] = $account->data['interbankCLABE'];
            $externalAccount['beneficiary'] = $account->data['beneficiary'];
            $externalAccount['email'] = $account->data['email'];
            $externalAccount['bankName'] = $bank->data['shortName'];
            $externalAccount['bankCode'] = $bank->data['code'];
            $externalAccount['transactionId'] = $this->generateUuid();

            return $externalAccount;
        } , $externalAccounts);
    }

    private function searchStpAccount(string $profile , string $userStpAccountId , string $commerceStpAccountId): array
    {
        $stpAccount = $this->ask(new StpAccountQuery(
            $profile ,
            $userStpAccountId ,
            $commerceStpAccountId
        ));
        $stpAccountBalance = $this->ask(new AccountBalanceQuery(
            $profile ,
            $userStpAccountId ,
            $commerceStpAccountId
        ));
        $stpAccount = $stpAccount->data;
        $stpAccount['balance'] = $stpAccountBalance->data['balance'];
        return $stpAccount;
    }

    private function searchTransactionUrls(array $externalAccounts): array
    {
        return array_map(function (array $externalAccount) {
            $transaction = $this->ask(new TransactionUrlQuery($externalAccount['transactionId']));
            return $transaction->data['url'];
        } , $externalAccounts);
    }
}