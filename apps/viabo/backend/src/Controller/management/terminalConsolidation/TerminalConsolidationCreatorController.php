<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\management\terminalConsolidation;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceQueryByLegalRepresentative;
use Viabo\catalogs\threshold\application\find\PayThresholdQuery;
use Viabo\management\terminalConsolidation\application\create\CreatorTerminalConsolidationCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class TerminalConsolidationCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $this->validateSession();
            $data = $request->toArray();
            $commerce = $this->ask(new CommerceQueryByLegalRepresentative($tokenData['id']));

            $threshold = $this->ask(new PayThresholdQuery('ViaboPay'));


            $this->dispatch(new CreatorTerminalConsolidationCommand(
                $commerce->data['id'],
                $tokenData['id'],
                $data['speiCardTransactionId'],
                $data['terminalId'],
                $data['transactions'],
                $threshold->data['threshold']
            ));



            return new JsonResponse($this->opensslEncrypt([]));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}
