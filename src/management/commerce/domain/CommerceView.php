<?php declare(strict_types=1);


namespace Viabo\management\commerce\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommerceView extends AggregateRoot
{
    public function __construct(
        private string $id,
        private string $legalRepresentative,
        private string $legalRepresentativeName,
        private string $legalRepresentativeEmail,
        private string $legalRepresentativePhone,
        private string $legalRepresentativeRegister,
        private string $legalRepresentativeLastSession,
        private string $fiscalPersonType,
        private string $taxName,
        private string $tradeName,
        private string $rfc,
        private string $employees,
        private string $branchOffices,
        private string $pointSaleTerminal,
        private string $paymentApi,
        private string $register,
        private string $statusId,
        private string $registerStep,
        private string $active,
        private string $statusName,
        private string $services,
        private string $documents

    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'legalRepresentative' => $this->legalRepresentative,
            'legalRepresentativeName' => $this->legalRepresentativeName,
            'legalRepresentativeEmail' => $this->legalRepresentativeEmail,
            'legalRepresentativePhone' => $this->legalRepresentativePhone,
            'legalRepresentativeRegister' => $this->legalRepresentativeRegister,
            'legalRepresentativeLastSession' => empty($this->legalRepresentativeLastSession) ? '' : $this->legalRepresentativeLastSession,
            'fiscalPersonType' => $this->fiscalPersonType,
            'taxName' => $this->taxName,
            'tradeName' => $this->tradeName,
            'rfc' => $this->rfc,
            'employees' => $this->employees,
            'branchOffices' => $this->branchOffices,
            'pointSaleTerminal' => $this->pointSaleTerminal,
            'paymentApi' => $this->paymentApi,
            'register' => $this->register,
            'statusId' => $this->statusId,
            'registerStep' => $this->registerStep,
            'statusName' => $this->statusName,
            'services' => empty($this->services) ? [] : json_decode("[$this->services]"),
            'documents' => empty($this->documents) ? [] : json_decode("[$this->documents]")
        ];
    }

}
