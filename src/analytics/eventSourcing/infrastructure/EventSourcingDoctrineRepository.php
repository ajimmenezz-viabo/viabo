<?php declare(strict_types=1);


namespace Viabo\analytics\eventSourcing\infrastructure;


use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Viabo\analytics\eventSourcing\domain\EventSourcing;
use Viabo\analytics\eventSourcing\domain\EventSourcingRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class EventSourcingDoctrineRepository extends DoctrineRepository implements EventSourcingRepository
{

    public function __construct(
        EntityManager            $AnalyticsEntityManager ,
        private readonly Session $session = new Session()
    )
    {
        parent::__construct($AnalyticsEntityManager);
    }

    public function save(EventSourcing $eventSourcing): void
    {
        $this->persist($eventSourcing);
    }

    public function userSession(): string
    {
        return $this->session->get('userId');
    }
}