<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\pdf;


use Knp\Snappy\Pdf;
use Viabo\shared\domain\pdf\PdfRepository;

final class PdfKnpSnappyBundleRepository implements PdfRepository
{
    public function __construct(private Pdf $pdf)
    {
    }

    public function output(string $html, array $config = []): string
    {
        return $this->pdf->getOutputFromHtml($html, $config);
    }
}