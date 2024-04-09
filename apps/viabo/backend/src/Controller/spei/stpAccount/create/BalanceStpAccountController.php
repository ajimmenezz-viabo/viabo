<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\stpAccount\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\stpAccount\application\create\RegisterBalanceStpAccountCommand;


final readonly class BalanceStpAccountController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $company = $request->query->getString('company');
            $this->dispatch(new RegisterBalanceStpAccountCommand($company));

            return new JsonResponse();

        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }


}