<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain\projection;


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

    public static function fromCompany(array $values): static
    {
        return new static(
            $values['id'],
            $values['folio'],
            $values['type'],
            $values['typeName'],
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
            $values['users'] ?? '[]',
            $values['services'] ?? '[]',
            $values['documents'] ?? '[]',
            $values['commissions'] ?? '[]',
            $values['updatedByUser'],
            $values['updateDate'],
            $values['createdByUser'],
            $values['createDate'],
            $values['active']
        );
    }

    public function updateUsers(array $users): void
    {
        $this->users = json_encode($users);
    }

    private function users(): array
    {
        return json_decode($this->users, true);
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
            'services' => $this->services,
            'documents' => $this->documents,
            'commissions' => $this->commissions,
            'updatedByUser' => $this->updatedByUser,
            'updateDate' => $this->updateDate,
            'createdByUser' => $this->createdByUser,
            'createDate' => $this->createDate,
            'active' => $this->active
        ];
    }

}
