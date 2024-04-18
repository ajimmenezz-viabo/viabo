<?php declare(strict_types=1);


namespace Viabo\backoffice\services\domain\new;


use Viabo\backoffice\services\domain\exceptions\ServiceTypeNotExist;
use Viabo\backoffice\services\domain\new\card\CardService;
use Viabo\backoffice\services\domain\new\pay\PayService;

final class ServiceFactory
{

    public static function create(array $values): Service
    {

        return match (intval($values['type'])) {
            1 => PayService::create(
                $values['companyId'],
                strval($values['employees']),
                strval($values['branchOffices']),
                strval($values['pointSaleTerminal']),
                strval($values['paymentApi']),
                $values['createdByUser'],
                $values['createDate']
            ),
            2 => CardService::create(
                $values['companyId'],
                strval($values['employees']),
                strval($values['branchOffices']),
                $values['cardNumbers'],
                $values['cardUse'],
                $values['personalized'],
                $values['createdByUser'],
                $values['createDate']
            ),
            default => throw new ServiceTypeNotExist(),
        };
    }
}