<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain\services;


use Viabo\business\commerce\domain\Commerce;

final readonly class CommerceUpdater
{

    public function byBackoffice(Commerce $commerce , array $data): Commerce
    {
        $oldData = $commerce->toArray();
        $data['pointSaleTerminal'] = $oldData['pointSaleTerminal'];
        $data['paymentApi'] = $oldData['paymentApi'];
        $data['registerStep'] = $oldData['registerStep'];
        return $this->update($commerce , $data);
    }

    public function byRegistration(Commerce $commerce , array $data): Commerce
    {
        $oldData = $commerce->toArray();
        $data['postalAddress'] = $oldData['postalAddress'];
        $data['phoneNumbers'] = $oldData['phoneNumbers'];
        $data['logoData'] = [];
        $data['slug'] = $oldData['slug'];
        $data['publicTerminal'] = $oldData['publicTerminal'];
        return $this->update($commerce , $data);
    }

    private function update(Commerce $commerce , array $data): Commerce
    {
        $commerce->update(
            $data['userId'] ,
            $data['fiscalPersonType'] ,
            $data['fiscalName'] ,
            $data['tradeName'] ,
            $data['rfc'] ,
            $data['postalAddress'] ,
            $data['phoneNumbers'] ,
            $data['logoData'] ,
            $data['slug'] ,
            $data['publicTerminal'] ,
            $data['employees'] ,
            $data['branchOffices'] ,
            $data['pointSaleTerminal'] ,
            $data['paymentApi'] ,
            $data['registerStep']
        );
        return $commerce;
    }
}