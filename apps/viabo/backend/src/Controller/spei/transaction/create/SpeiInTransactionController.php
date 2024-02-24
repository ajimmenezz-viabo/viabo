<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\spei\transaction\create;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\spei\transaction\application\create\RegisterSpeiInTransactionCommand;


final readonly class SpeiInTransactionController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $date = $request->query->getInt('date');
            $company = $request->query->getString('company');
            $this->dispatch(new RegisterSpeiInTransactionCommand($date, $company));

            return new JsonResponse();

        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }


}