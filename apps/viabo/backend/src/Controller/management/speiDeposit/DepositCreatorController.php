<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\speiDeposit;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\management\speiDeposit\application\find\DepositReferenceQuery;
use Viabo\management\speiDeposit\application\create\CreateDepositCommand;
use Viabo\security\api\application\find\ValidateApiKeyCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class DepositCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $token = $request->headers->get('Authorization');
            $data = $request->toArray();
            $this->dispatch(new ValidateApiKeyCommand('Viabo_Register_Pays' , $token));
            $this->dispatch(new CreateDepositCommand($data));
            $depositReference = $this->ask(new DepositReferenceQuery($data['key'] ?? null));

            return new JsonResponse($this->formatResponse($depositReference->data));
        } catch (\DomainException $exception) {
            $success = false;
            return new JsonResponse(
                $this->formatResponse($exception->getMessage() , $success , $exception->getCode()) ,
                $exception->getCode()
            );
        }
    }
}