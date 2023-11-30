<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\update;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\services\CommerceFinder;
use Viabo\business\commerce\domain\services\CommerceUpdater as CommerceUpdaterService;
use Viabo\business\commerce\domain\services\EnsureBusinessRules;
use Viabo\business\commerce\domain\services\LogoDataFinder;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\uploadFile\UploadFileRepository;

final readonly class CommerceUpdaterByBackoffice
{
    public function __construct(
        private CommerceRepository     $repository ,
        private CommerceUpdaterService $updater ,
        private UploadFileRepository   $uploadFileRepository ,
        private CommerceFinder         $finder ,
        private EnsureBusinessRules    $ensureBusinessRules ,
        private LogoDataFinder         $logoDataFinder ,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(
        string $userId ,
        string $commerceId ,
        string $tradeName ,
        string $fiscalName ,
        string $rfc ,
        string $fiscalPersonType ,
        string $employees ,
        string $branchOffices ,
        string $postalAddress ,
        string $phoneNumbers ,
        string $slug ,
        string $publicTerminal ,
        array  $logo
    ): void
    {
        $this->ensureBusinessRules->__invoke($commerceId , $tradeName , $slug);

        $commerce = $this->finder->commerce(new CommerceId($commerceId) , CommerceLegalRepresentative::empty());
        $logoData = $this->searchFileData($logo);
        $this->updater->byBackoffice($commerce , [
            'userId' => $userId ,
            'fiscalPersonType' => $fiscalPersonType ,
            'fiscalName' => $fiscalName ,
            'tradeName' => $tradeName ,
            'rfc' => $rfc ,
            'postalAddress' => $postalAddress ,
            'phoneNumbers' => $phoneNumbers ,
            'logoData' => $logoData ,
            'slug' => $slug ,
            'publicTerminal' => $publicTerminal ,
            'employees' => $employees ,
            'branchOffices' => $branchOffices
        ]);

        $this->repository->update($commerce);
        $this->uploadFiles($commerce , $logo);

        $this->bus->publish(...$commerce->pullDomainEvents());
    }

    private function searchFileData(array $logo): array
    {
        return empty($logo['logo']) ? [] : $this->logoDataFinder->__invoke($logo);
    }

    private function uploadFiles(Commerce $commerce , array $logo): void
    {
        $files = empty($logo['logo']) ? [] : $logo;
        array_map(function (object $file) use ($commerce) {
            $logoData = $commerce->logoData();
            $this->uploadFileRepository->upload(
                $file ,
                $logoData['directoryPath'] ,
                $logoData['allowedExtensions'] ,
                $logoData['name']
            );
        } , $files);
    }

}