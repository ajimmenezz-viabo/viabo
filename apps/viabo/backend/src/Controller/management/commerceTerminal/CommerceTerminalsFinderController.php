<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\commerceTerminal;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\management\commerceTerminal\application\find\FindTerminalsQuery;
use Viabo\management\commerceTerminal\application\find\TerminalSpeiCardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CommerceTerminalsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();

            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));
            $commerceData = $commerce->data;
            $speiCards = $this->ask(new TerminalSpeiCardsQuery($commerce->data['id']));

            $data = $this->ask(new FindTerminalsQuery($commerceData['id'],$speiCards->data));

            return new JsonResponse($data->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
