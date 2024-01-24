<?php

namespace Viabo\spei\shared\infrastructure\doctrine;

use Doctrine\ORM\EntityManagerInterface;
use Viabo\shared\infrastructure\doctrine\DoctrineEntityManagerFactory;

class EntityManagerFactory
{
    public static function create(array $parameters, string $environment): EntityManagerInterface
    {
        $isDevMode = 'prod' !== $environment;

        $prefixes = array_merge(
            DoctrinePrefixesSearcher::inPath(__DIR__ . '/../../../../spei' , 'Viabo\spei')
        );

        $dbalCustomTypesClasses = DbalTypesSearcher::inPath(__DIR__ . '/../../../../spei' , 'spei');

        return DoctrineEntityManagerFactory::create(
            $parameters,
            $prefixes,
            $isDevMode,
            $dbalCustomTypesClasses
        );
    }

}