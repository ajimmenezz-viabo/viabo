<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commercePay;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\commercePay\application\find\FindCommercePayQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommercePayFinderController extends ApiController
{
    public function __invoke(string $urlCode, Request $request): Response
    {
        try {

            $commercePay = $this->ask(new FindCommercePayQuery($urlCode));

            return new JsonResponse($this->encode($commercePay->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
