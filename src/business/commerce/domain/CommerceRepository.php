<?php declare(strict_types=1);

namespace Viabo\business\commerce\domain;

use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\criteria\Criteria;

interface CommerceRepository
{
    public function save(Commerce $commerce): void;

    public function searchCriteria(Criteria $criteria): array;

    public function search(CommerceId $commerceId): Commerce|null;

    public function searchViewCriteria(Criteria $criteria): array;

    public function update(Commerce $commerce): void;

}