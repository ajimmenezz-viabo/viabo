<?php

namespace Viabo\analytics\shared\infrastructure\doctrine;

use Doctrine\ORM\EntityManagerInterface;
use Viabo\shared\infrastructure\doctrine\DoctrineEntityManagerFactory;

class AnalyticsEntityManagerFactory
{
    public static function create(array $parameters, string $environment): EntityManagerInterface
    {
        $isDevMode = 'prod' !== $environment;

        $prefixes = array_merge(
            DoctrinePrefixesSearcher::inPath(__DIR__ . '/../../../../analytics' , 'Viabo\analytics')
        );

        $dbalCustomTypesClasses = DbalTypesSearcher::inPath(__DIR__ . '/../../../../analytics' , 'analytics');

        return DoctrineEntityManagerFactory::create(
            $parameters,
            $prefixes,
            $isDevMode,
            $dbalCustomTypesClasses
        );
    }

}