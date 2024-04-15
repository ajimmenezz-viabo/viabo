<?php declare(strict_types=1);


namespace Viabo\backoffice\users\domain;


use Viabo\backoffice\shared\domain\company\CompanyId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CompanyUser extends AggregateRoot
{
    public function __construct(
        private CompanyUserId         $userId,
        private CompanyId             $companyId,
        private CompanyUserProfileId  $profileId,
        private CompanyUserName       $name,
        private CompanyUserLastname   $lastname,
        private CompanyUserEmail      $email,
        private CompanyUserCreateDate $createDate
    )
    {
    }

    public
    static function create(array $values): self
    {
        return new static(
            CompanyUserId::create($values['user']['id']),
            CompanyId::create($values['id']),
            CompanyUserProfileId::create($values['user']['profile']),
            CompanyUserName::create($values['user']['name']),
            CompanyUserLastname::create($values['user']['lastname']),
            CompanyUserEmail::create($values['user']['email']),
            CompanyUserCreateDate::create($values['createDate'])
        );
    }

    public function userId(): string
    {
        return $this->userId->value();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->userId->value(),
            'companyId' => $this->companyId->value(),
            'profile' => $this->profileId->value(),
            'name' => $this->name->value(),
            'lastname' => $this->lastname->value(),
            'email' => $this->email->value(),
            'createDate' => $this->createDate->value()
        ];
    }

}