<?php

namespace Viabo\Backend\Controller\backoffice\company\update;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\update_company_by_admin_stp\UpdateCompanyCommandByAdminStp;
use Viabo\backoffice\users\application\create_users_by_admin_stp\CreateCompanyUserCommand;
use Viabo\security\user\application\create_admin_stp\CreateAdminStpUserCommand;
use Viabo\security\user\application\find\ValidateUserNewCommand;
use Viabo\shared\infrastructure\symfony\ApiController;


final readonly class CompanyUpdaterByAdminStpController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();

            $this->validateNewUser($data);
            $this->dispatch(new UpdateCompanyCommandByAdminStp(
                $tokenData['id'],
                $data['id'],
                $data['fiscalName'],
                $data['commercialName'],
                $data['stpAccount'],
                $data['assignedUsers'],
                $data['costCenters'],
                $data['commissions']
            ));
            $this->addUserNewInCompany($data, $tokenData['businessId']);

            return new JsonResponse();
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    public function validateNewUser(array $data): void
    {
        if ($data['isNewUser']) {
            $this->dispatch(new ValidateUserNewCommand($data['userName'], $data['userEmail']));
        }
    }

    private function addUserNewInCompany(array $data, string $businessId): void
    {
        if ($data['isNewUser']) {
            $userId = $this->createAdminStpUser($data, $businessId);
            $this->dispatch(new CreateCompanyUserCommand([
                'id' => $data['id'],
                'businessId' => $businessId,
                'users' => [$userId]
            ]));
        }
    }

    public function createAdminStpUser(array $data, string $businessId): string
    {
        $userId = $this->generateUuid();
        $adminStpProfileId = '7';
        $this->dispatch(new CreateAdminStpUserCommand(
            $userId,
            $businessId,
            $adminStpProfileId,
            $data['userName'],
            $data['userLastName'],
            $data['userEmail'],
            $data['userPhone']
        ));
        return $userId;
    }

}