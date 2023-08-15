<?php

namespace Viabo\management\commerceTransaction\domain;

interface CommercePayTransactionRepository
{
    public function save(CommercePayTransaction $transaction):void;

    public function searchBy(CommercePayTransactionId $transactionId):CommercePayTransaction;

}
