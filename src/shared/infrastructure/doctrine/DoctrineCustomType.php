<?php

namespace Viabo\shared\infrastructure\doctrine;

interface DoctrineCustomType
{
    public function customTypeName(): string;
}