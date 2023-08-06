<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTerminal;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\business\commerce\application\find\CommerceQuery;
use Viabo\management\commerceTerminal\application\find\FindTerminalsQuery;

final readonly class CommerceTerminalsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            //$tokenData = $this->decode($request->headers->get('Authorization'));
            //$this->validateSession();
            //$commerce = $this->ask(new CommerceQuery(1441));

            $data = $this->ask(new FindTerminalsQuery('17ea6538-f2df-4700-9180-457fc0d4ed3c'));

            return new JsonResponse($data->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
