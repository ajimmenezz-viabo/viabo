<?php

namespace Viabo\management\commerceTransaction\domain;

interface CommercePayTransactionRepository
{
    public function save(CommercePayTransaction $transaction):void;

}
