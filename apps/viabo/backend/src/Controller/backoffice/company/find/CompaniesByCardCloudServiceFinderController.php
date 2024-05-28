<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\backoffice\company\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\projection\application\find_companies_with_service_card_cloud_by_admin\CompaniesWithCardCloudServiceByAdminQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CompaniesByCardCloudServiceFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
//            $tokenData = $this->decode($request->headers->get('Authorization'));
            $userId = "82438ecc-829a-4c2d-9df8-c7babbd32372";
            $businessId = "9d270cda-6aa6-45c3-8716-24f948a959cb";
            $profileId = "5";
            $commerces = $this->ask(new CompaniesWithCardCloudServiceByAdminQuery(
                $userId,
                $businessId,
                $profileId
            ));

            return new JsonResponse($commerces->data);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}
