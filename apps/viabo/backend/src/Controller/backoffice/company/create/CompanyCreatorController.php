<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\backoffice\company\create;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\company\application\create\CreateCompanyCommand;
use Viabo\backoffice\company\application\delete\DeleteCompanyCommand;
use Viabo\backoffice\company\application\update\AddUserToCompanyCommand;
use Viabo\security\user\application\create\CreateCompaniesAdminUserCommand;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class CompanyCreatorController extends ApiController
{
    public function __invoke(Request $request): Response
    {
        $companyId = $this->generateUuid();
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $data = $request->toArray();

            $this->dispatch(new CreateCompanyCommand(
                $tokenData['id'],
                $companyId,
                $data['fiscalName'],
                $data['rfc'],
                $data['commercialName'],
                $data['assignedUsers'],
                $data['costCenters']
            ));

            if ($data['isNewUser']) {
                $userId = $this->createCompaniesAdminUser($data);
                $this->dispatch(new AddUserToCompanyCommand($companyId, [$userId]));
            }

            return new JsonResponse();
        } catch (\DomainException $exception) {
            $this->deleteCompany($companyId);
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }

    public function createCompaniesAdminUser(array $data): string
    {
        $userId = $this->generateUuid();
        $this->dispatch(new CreateCompaniesAdminUserCommand(
            $userId,
            $data['userName'],
            $data['userLastName'],
            $data['userEmail'],
            $data['userPhone']
        ));
        return $userId;
    }

    private function deleteCompany(string $companyId): void
    {
        $this->dispatch(new DeleteCompanyCommand($companyId));
    }
}