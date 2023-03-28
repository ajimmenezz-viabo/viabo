<?php

namespace Viabo\business\shared\infrastructure\doctrine;

use Doctrine\ORM\EntityManagerInterface;
use Viabo\shared\infrastructure\doctrine\DoctrineEntityManagerFactory;

class BusinessEntityManagerFactory
{
    public static function create(array $parameters, string $environment): EntityManagerInterface
    {
        $isDevMode = 'prod' !== $environment;

        $prefixes = array_merge(
            DoctrinePrefixesSearcher::inPath(__DIR__ . '/../../../../business' , 'Viabo\business')
        );

        $dbalCustomTypesClasses = DbalTypesSearcher::inPath(__DIR__ . '/../../../../business' , 'business');

        return DoctrineEntityManagerFactory::create(
            $parameters,
            $prefixes,
            $isDevMode,
            $dbalCustomTypesClasses
        );
    }

}