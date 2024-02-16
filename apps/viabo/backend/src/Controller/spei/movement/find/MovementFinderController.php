<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\movement\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find\CommerceQuery;
use Viabo\backoffice\company\application\find\CommerceQueryByLegalRepresentative;
use Viabo\backoffice\commerceUser\application\find\CommerceQueryByUser;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\movement\application\find\MovementsQuery;
use Viabo\spei\stpAccount\application\find\StpAccountQuery;


final readonly class MovementFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $commerce = $this->searchCommerce($tokenData['id']);
            $user = $this->ask(new FindUserQuery($tokenData['id'] , ''));
            $stpAccount = $this->ask(new StpAccountQuery(
                $user->data['profile'] ,
                $user->data['stpAccountId'] ,
                $commerce['stpAccountId']
            ));
            $movements = $this->ask(new MovementsQuery($stpAccount->data));

            return new JsonResponse($this->opensslEncrypt($movements->data));
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