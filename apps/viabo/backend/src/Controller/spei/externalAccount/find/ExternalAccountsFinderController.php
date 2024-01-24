<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\externalAccount\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\bank\application\find\BankQuery;
use Viabo\spei\externalAccount\application\find\ExternalAccountsQuery;


final readonly class ExternalAccountsFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $this->decode($request->headers->get('Authorization'));
            $externalAccounts = $this->ask(new ExternalAccountsQuery());
            $externalAccounts = $this->mergeShorNameBank($externalAccounts->data);

            return new JsonResponse($externalAccounts);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }

    private function mergeShorNameBank(array $externalAccounts): array
    {
        return array_map(function (array $externalAccount) {
            $bank = $this->ask(new BankQuery($externalAccount['bankId']));
            $externalAccount['shorNameBank'] = $bank->data['shortName'];
            return $externalAccount;
        } , $externalAccounts);
    }
}