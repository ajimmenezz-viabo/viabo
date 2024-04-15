<?php declare(strict_types=1);


namespace Viabo\backoffice\services\application\events;


use Viabo\backoffice\services\application\create\ServicesCreator;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final class CreateServiceSpeiByCompanyCreated implements DomainEventSubscriber
{
    public function __construct(private ServicesCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [];
    }

    public function __invoke(): void
    {
//        $companyId = $event->aggregateId();
//        $this->creator->__invoke(
//            $companyId,
//            [[
//                "type" => "4",
//                "cardNumbers" => "0",
//                "cardUse" => "",
//                "personalized" => "0"
//            ]]
//        );
    }
}