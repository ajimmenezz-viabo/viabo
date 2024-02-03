<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\tickets\ticket\create;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\tickets\supportReason\application\find\SupportReasonQuery;
use Viabo\tickets\ticket\application\create\CreateTicketCommand;
use Viabo\tickets\ticket\application\find\TicketIdLastQuery;

final readonly class TicketCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $supportReasonId = $request->request->getString('supportReasonId');
            $description = $request->request->getString('description');
            $uploadDocuments = $request->files->all();
            $ticketId = $this->ask(new TicketIdLastQuery());
            $supportReason = $this->ask(new SupportReasonQuery($supportReasonId));

            $this->dispatch(new CreateTicketCommand(
                $tokenData['id'] ,
                $ticketId->data['id'] ,
                $supportReason->data['id'] ,
                $supportReason->data['assignedProfileId'] ,
                $description ,
                $uploadDocuments
            ));

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}