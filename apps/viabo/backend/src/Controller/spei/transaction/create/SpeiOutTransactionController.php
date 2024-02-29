<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\transaction\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\transaction\application\create\RegisterSpeiOutTransactionCommand;


final readonly class SpeiOutTransactionController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $company = $request->query->getString('company');
            $this->dispatch(new RegisterSpeiOutTransactionCommand($company));

            return new JsonResponse();

        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }


}