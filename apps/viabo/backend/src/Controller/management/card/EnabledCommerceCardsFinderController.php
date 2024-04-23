<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\card;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\find_company_by_user\CompanyQueryByUser;
use Viabo\management\card\application\find\EnabledCardsQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class EnabledCommerceCardsFinderController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $paymentProcessorId = $request->get('paymentProcessorId');
            $userId = $tokenData['id'];
            $company = $this->ask(new CompanyQueryByUser($userId, $tokenData['businessId']));
            $data = $this->ask(new EnabledCardsQuery(
                $company->data['id'],
                $userId,
                $tokenData['profileId'],
                $paymentProcessorId
            ));

            return new JsonResponse($this->opensslEncrypt($data->data));
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}