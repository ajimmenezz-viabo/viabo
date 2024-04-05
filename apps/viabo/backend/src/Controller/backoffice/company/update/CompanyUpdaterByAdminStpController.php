<?php

namespace Viabo\Backend\Controller\backoffice\company\update;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\update\AddUserToCompanyCommand;
use Viabo\backoffice\company\application\update\UpdateCompanyByAdminStpCommand;
use Viabo\security\user\application\create\CreateAdministratorUserCommand;
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
            $this->dispatch(new UpdateCompanyByAdminStpCommand(
                $tokenData['id'],
                $data['id'],
                $data['fiscalName'],
                $data['commercialName'],
                $data['assignedUsers'],
                $data['costCenters'],
                $data['commissions']
            ));
            $this->addUserNewInCompany($data);

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

    private function addUserNewInCompany(array $data): void
    {
        if ($data['isNewUser']) {
            $userId = $this->createCompaniesAdminUser($data);
            $this->dispatch(new AddUserToCompanyCommand($data['id'], [$userId]));
        }
    }

    public function createCompaniesAdminUser(array $data): string
    {
        $userId = $this->generateUuid();
        $companyAdministratorProfileId = '7';
        $this->dispatch(new CreateAdministratorUserCommand(
            $userId,
            $companyAdministratorProfileId,
            $data['userName'],
            $data['userLastName'],
            $data['userEmail'],
            $data['userPhone']
        ));
        return $userId;
    }

}