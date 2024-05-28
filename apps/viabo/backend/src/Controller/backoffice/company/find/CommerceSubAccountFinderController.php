<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\backoffice\company\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\find_sub_account_by_company\SubAccountCardCloudServiceByCompanyQuery;

final readonly class CommerceSubAccountFinderController extends ApiController
{

    public function __invoke(string $companyId, Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $company = $this->ask(new SubAccountCardCloudServiceByCompanyQuery(
                $tokenData['businessId'],
                $companyId
            ));
            return new JsonResponse($company->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
