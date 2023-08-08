<?php declare(strict_types=1);

namespace Viabo\management\shared\infrastructure\paymentGateway;

use Viabo\management\shared\domain\paymentGateway\PaymentGatewayAdapter;
use Viabo\management\commerceTerminal\domain\TerminalCommerceId;

final class PaymentGatewayPharosAdapter implements PaymentGatewayAdapter
{
    public function searchTerminalsBy(TerminalCommerceId $commerceId, string $pharosKey): array
    {
        $data = [
            'commerceId' => $commerceId->value(),
            'pharosKey' => $pharosKey
        ];

        return $this->request($data);
    }

    private function request(array $data):array
    {
        $url = "https://o3tkmwsybj.execute-api.us-west-2.amazonaws.com/v1_3/chains/merchants/{$data['commerceId']}/terminals";

        $ch = curl_init($url);

        $headers = array(
            'Accept: application/json' ,
            'X-API-Key: '.$data['pharosKey']
        );

        $ch = curl_init();
        curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , 0);
        curl_setopt($ch , CURLOPT_URL , $url);
        curl_setopt($ch , CURLOPT_RETURNTRANSFER , 1);
        curl_setopt($ch , CURLOPT_HEADER , 0);
        curl_setopt($ch , CURLOPT_FAILONERROR , true);
        curl_setopt($ch , CURLOPT_HTTPHEADER , $headers);

        $response = json_decode(curl_exec($ch) , true);

        $curlErrno = curl_errno($ch);
        $curlError = curl_error($ch);

        curl_close($ch);

        if ($curlErrno) {
            throw new \DomainException("Error de API PHAROS: {Error: ". $curlError . "(" . $curlErrno . ")}" , 403);

        }

        return $response;
    }
}
