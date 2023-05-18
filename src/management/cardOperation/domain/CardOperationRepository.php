<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


interface CardOperationRepository
{
    public function save(CardOperations $operations): void;
}