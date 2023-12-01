<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\update;


use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\services\CommerceFinder;
use Viabo\business\commerce\domain\services\CommerceUpdater as CommerceUpdaterService;
use Viabo\business\commerce\domain\services\EnsureBusinessRules;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommerceUpdaterByRegistration
{

    public function __construct(
        private CommerceRepository     $repository ,
        private CommerceUpdaterService $updater ,
        private EnsureBusinessRules    $businessRules ,
        private CommerceFinder         $commerceFinder ,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(
        string $commerceId ,
        string $fiscalPersonType ,
        string $fiscalName ,
        string $tradeName ,
        string $rfc ,
        string $employees ,
        string $branchOffices ,
        string $pointSaleTerminal ,
        string $paymentApi ,
        string $registerStep
    ): void
    {
        $commerce = $this->commerceFinder->commerce(new CommerceId($commerceId) , CommerceLegalRepresentative::empty());
        $this->ensureTradeName($tradeName , $commerceId , $registerStep);
        $commerce = $this->updater->byRegistration($commerce , [
            'userId' => '' ,
            'fiscalPersonType' => $fiscalPersonType ,
            'fiscalName' => $fiscalName ,
            'tradeName' => $tradeName ,
            'rfc' => $rfc ,
            'employees' => $employees ,
            'branchOffices' => $branchOffices ,
            'pointSaleTerminal' => $pointSaleTerminal ,
            'paymentApi' => $paymentApi ,
            'registerStep' => $registerStep
        ]);

        $this->repository->update($commerce);
        $this->bus->publish(...$commerce->pullDomainEvents());
    }

    private function ensureTradeName(string $tradeName , string $commerceId , string $registerStep): void
    {
        $registerStep = intval($registerStep);
        if ($registerStep > 2) {
            $this->businessRules->ensureTradeName($commerceId , $tradeName);
        }
    }

}