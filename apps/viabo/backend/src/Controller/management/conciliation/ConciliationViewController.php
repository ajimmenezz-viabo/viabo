<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\conciliation;


use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Viabo\management\conciliation\application\find\ConciliationQuery;
use Viabo\shared\domain\utils\NumberFormat;
use Viabo\shared\infrastructure\qr\QRCodeEndroidAdapter;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class ConciliationViewController extends ApiController
{

    public function __invoke(int $referenceNumber , Request $request , Environment $twig, QRCodeEndroidAdapter $adapter): Response
    {
        try {

            $data = $this->ask(new ConciliationQuery($referenceNumber));
            $conciliationData = $data->data;
            $conciliationData['amount'] = NumberFormat::money(floatval($conciliationData['amount']));
            $conciliationData['barcodePayCash'] = $adapter->generatorBarcode($conciliationData['referencePayCash']);

            $html = $twig->render('management/notification/emails/conciliation.spei.html.twig' , $conciliationData);
            return new Response($html);
        } catch (\DomainException) {
            $html = $twig->render('management/notification/emails/conciliation.not.exist.html.twig');
            return new Response($html);
        }
    }
}