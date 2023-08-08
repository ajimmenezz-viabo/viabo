<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

interface CommercePayRepository
{
    public function save(CommercePay $commercePay):void;

    public function search(CommercePayUrlCode $urlCode):CommercePay|null;

    public function searchBy (CommercePayReferenceId $referenceId):CommercePay|null;
}
