<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\qr;


use Endroid\QrCode\Builder\Builder;
use Picqer\Barcode\BarcodeGeneratorPNG;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Viabo\shared\domain\qr\QRCodeAdapter;
use Viabo\shared\domain\utils\URL;

final class QRCodeEndroidAdapter implements QRCodeAdapter
{
    private string $rootDir;

    public function __construct(ParameterBagInterface $params)
    {
        $this->rootDir = $params->get('kernel.project_dir') . '/public/storage';
    }

    public function generator(string $value): string
    {
        $filename = 'temp_qr.png';
        $filePath = "$this->rootDir/temp/qr";

        if (!file_exists($filePath)) {
            mkdir($filePath , 0777 , true);
        }

        $qr = Builder::create()->size(200)->data($value)->build();
        $qr->saveToFile("$filePath/$filename");
        return URL::get() . "/storage/temp/qr/$filename";
    }

    public function generatorBarcode(string $value): string
    {
        $generator = new BarcodeGeneratorPNG();
        $barcodeImage = $generator->getBarcode($value , $generator::TYPE_CODE_128 , 2 , 30 , [255 , 255 , 255]);
        $filename = 'temp_barcode.png';
        $filePath = "$this->rootDir/temp/barcode";

        if (!file_exists($filePath)) {
            mkdir($filePath , 0777 , true);
        }

        file_put_contents("$filePath/$filename" , $barcodeImage);

        return URL::get() . "/storage/temp/barcode/$filename";
    }
}