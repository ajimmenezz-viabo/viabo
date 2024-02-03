<?php declare(strict_types=1);


namespace Viabo\tickets\message\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\tickets\message\domain\Message;
use Viabo\tickets\message\domain\MessageFile;
use Viabo\tickets\message\domain\MessageRepository;

final class MessageDoctrineRepository extends DoctrineRepository implements MessageRepository
{
    public function __construct(EntityManager $TicketsEntityManager)
    {
        parent::__construct($TicketsEntityManager);
    }

    public function save(Message $message): void
    {
        $this->persist($message);
        array_map(function (MessageFile $file) {
            $this->persist($file);
        } , $message->files());
    }
}