<?php declare(strict_types=1);


namespace Viabo\backoffice\projection\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;

final class CompanyProjection extends AggregateRoot
{
    public function __construct(
        private string  $id,
        private string  $folio,
        private string  $type,
        private string  $typeName,
        private string  $businessId,
        private string  $fatherId,
        private string  $fiscalPersonType,
        private string  $fiscalName,
        private string  $tradeName,
        private string  $rfc,
        private string  $postalAddress,
        private string  $phoneNumbers,
        private string  $logo,
        private string  $slug,
        private float   $balance,
        private string  $statusId,
        private string  $statusName,
        private ?string $registerStep,
        private string  $users,
        private string  $services,
        private string  $documents,
        private string  $commissions,
        private string  $updatedByUser,
        private string  $updateDate,
        private string  $createdByUser,
        private string  $createDate,
        private string  $active
    )
    {
    }

    public static function create(array $values): static
    {
        $values['users'] = empty($values['users']) ? '[]' : json_encode($values['users']);
        $values['commissions'] = empty($values['commissions']) ? '[]' : json_encode($values['commissions']);
        return new static(
            $values['id'],
            $values['folio'],
            $values['type'],
            $values['typeName'] ?? '',
            $values['businessId'],
            $values['fatherId'],
            $values['fiscalPersonType'],
            $values['fiscalName'],
            $values['tradeName'],
            $values['rfc'],
            $values['postalAddress'],
            $values['phoneNumbers'],
            $values['logo'],
            $values['slug'],
            $values['balance'],
            $values['statusId'],
            $values['statusName'] ?? '',
            $values['registerStep'],
            $values['users'],
            $values['services'] ?? '[]',
            $values['documents'] ?? '[]',
            $values['commissions'],
            $values['updatedByUser'],
            $values['updateDate'],
            $values['createdByUser'],
            $values['createDate'],
            $values['active']
        );
    }

    public function id(): string
    {
        return $this->id;
    }

    public function type(): string
    {
        return $this->type;
    }

    public function status(): string
    {
        return $this->statusId;
    }

    public function updateStatusNameAndTypeName(string $typeName, string $statusName): void
    {
        $this->typeName = $typeName;
        $this->statusName = $statusName;
    }

    public function hasUserProfileOfType(string $profileId): bool
    {
        $users = array_filter($this->users(), function (array $user) use ($profileId) {
            return strval($user['profile']) === $profileId;
        });
        return !empty($users);
    }

    public function updateUsers(array $users): void
    {
        $this->users = empty($users) ? '[]' : json_encode($users);
    }

    private function users(): array
    {
        return json_decode($this->users, true);
    }

    public function updateServices(array $services): void
    {
        $this->services = empty($services) ? '[]' : json_encode($services);
    }

    public function services(): array
    {
        $services = json_decode($this->services, true);
        return array_map(function (array $service) {
            unset($service['updateByUser'], $service['updateDate'], $service['createdByUser'], $service['createDate']);
            $service['cardNumbers'] = $service['numbers'] ?? '0';
            $service['cardUse'] = $service['purpose'] ?? '0';
            return $service;
        }, $services);
    }

    public function updateDocuments(array $documents): void
    {
        $this->documents = json_encode($documents);
    }

    private function documents(): array
    {
        $documents = json_decode($this->documents, true);
        return array_map(function (array $document) {
            return ['Id' => $document['id'], 'Name' => $document['name'], 'storePath' => $document['storePath']];
        }, $documents);
    }

    private function commissions(): array
    {
        return json_decode($this->commissions, true);
    }

    public function updateCommissions(array $commissions): void
    {
        $this->commissions = empty($commissions) ? '[]' : json_encode($commissions);
    }

    public function update(
        string $fiscalPersonType,
        string $fiscalName,
        string $tradeName,
        string $rfc,
        string $registerStep,
    ): void
    {
        $this->fiscalPersonType = $fiscalPersonType;
        $this->fiscalName = $fiscalName;
        $this->tradeName = $tradeName;
        $this->rfc = $rfc;
        $this->registerStep = $registerStep;
    }

    public function hasNotCompletedRegistration(): bool
    {
        return intval($this->registerStep) < 4;
    }

    public function hasServiceSpei(): bool
    {
        $serviceSpei = '4';
        return in_array($serviceSpei, $this->serviceTypes());
    }

    public function serviceTypes(): array
    {
        $typeIds = [];
        foreach ($this->services() as $service) {
            if (!in_array($service['type'], $typeIds)) {
                $typeIds[] = $service['type'];
            }
        }
        return $typeIds;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'folio' => $this->folio,
            'type' => $this->type,
            'typeName' => $this->typeName,
            'businessId' => $this->businessId,
            'fatherId' => $this->fatherId,
            'fiscalPersonType' => $this->fiscalPersonType,
            'fiscalName' => $this->fiscalName,
            'tradeName' => $this->tradeName,
            'rfc' => $this->rfc,
            'postalAddress' => $this->postalAddress,
            'phoneNumbers' => $this->phoneNumbers,
            'logo' => $this->logo,
            'slug' => $this->slug,
            'balance' => $this->balance,
            'statusId' => $this->statusId,
            'statusName' => $this->statusName,
            'registerStep' => $this->registerStep,
            'users' => $this->users(),
            'services' => $this->services(),
            'documents' => $this->documents(),
            'commissions' => $this->commissions(),
            'updatedByUser' => $this->updatedByUser,
            'updateDate' => $this->updateDate,
            'createdByUser' => $this->createdByUser,
            'createDate' => $this->createDate,
            'active' => $this->active
        ];
    }

    public function toArrayOld(): array
    {
        $admin = $this->users();
        $services = $this->services();
        return [
            'id' => $this->id,
            'folio' => $this->folio,
            'fatherId' => $this->fatherId,
            'legalRepresentative' => $admin[0]['id'],
            'legalRepresentativeName' => $admin[0]['name'],
            'legalRepresentativeEmail' => $admin[0]['email'],
            'legalRepresentativePhone' => '',
            'legalRepresentativeRegister' => '',
            'legalRepresentativeLastSession' => '',
            'fiscalPersonType' => $this->fiscalPersonType,
            'fiscalName' => $this->fiscalName ?? '',
            'tradeName' => $this->tradeName,
            'rfc' => $this->rfc,
            'postalAddress' => $this->postalAddress,
            'phoneNumbers' => $this->phoneNumbers,
            'logo' => $this->logo,
            'slug' => $this->slug,
            'balance' => $this->balance,
            'bankAccount' => '',
            'publicTerminal' => '',
            'employees' => $services[0]['employees'] ?? '0',
            'branchOffices' => $services[0]['branchOffices'] ?? '0',
            'pointSaleTerminal' => $services[0]['pointSaleTerminal'] ?? '0',
            'paymentApi' => $services[0]['paymentApi'] ?? '0',
            'type' => $this->type,
            'typeName' => $this->typeName,
            'allowTransactions' => '',
            'statusId' => $this->statusId,
            'statusName' => $this->statusName,
            'stpAccountId' => '',
            'registerStep' => $this->registerStep,
            'services' => $services,
            'servicesIds' => [],
            'documents' => $this->documents(),
            'commissions' => json_decode($this->commissions, true),
            'createdByUser' => $this->createdByUser,
            'register' => $this->createDate,
            'active' => $this->active
        ];
    }

}
