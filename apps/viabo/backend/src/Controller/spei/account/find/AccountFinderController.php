<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\account\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\business\commerceUser\application\find\CommerceQueryByUser;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\stpAccount\application\find\AccountBalanceQuery;
use Viabo\spei\stpAccount\application\find\StpCredentialQuery;


final readonly class AccountFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->searchCommerce($tokenData['id']);
            $user = $this->ask(new FindUserQuery($tokenData['id'] , ''));
            $accountBalance = $this->ask(new AccountBalanceQuery(
                $user->data['profile'] ,
                $user->data['stpAccountId'] ,
                $commerce['stpAccountId']
            ));

            return new JsonResponse($accountBalance->data);
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
}