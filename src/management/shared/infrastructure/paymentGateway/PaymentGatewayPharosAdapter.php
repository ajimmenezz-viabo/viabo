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

    public function transactionProcessor(string $merchantId, array $cardBank, array $commercePay):array
    {
        // $url = 'https://api-sandbox.pharospayments.com/gateway/charge';
        $url = 'https://api.pharospayments.com/payments/v1/charge';

        $ch = curl_init($url);

        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ipAddress = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ipAddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ipAddress = $_SERVER['REMOTE_ADDR'];
        }

        $data = array(
            'tran_type' => 'SALE' , // SALE = Venta, CANCEL = Cancelación, REFUND = Devolución
            'stan' => $commercePay['referenceId'] , // idCobro
            'date' => date('YmdHis') , // 2020-08-29T09:12:33.001Z
            'pos_environment' => 'ecommerce' ,
            'amount' => $commercePay['amount'],
            'currency' => '484' , // MXN = 484
            'order_number' => $commercePay['referenceId'] , // idCobro
            'terminal_code' => $commercePay['terminalId'] ,
            'merchant_code' => $merchantId,
            'source_ip' => $ipAddress ,
            'notify_url' => '' , // "https://www.viabo.com/admin/notificarCobro",
            'cancel_url' => '' ,
            'return_url' => '' ,
            'email' => $commercePay['email'] ,
            'phone' => $commercePay['phone'] ,
            'language' => 'es' ,
            'Card' => $cardBank
        );

        $json = json_encode($data);

        $headers = array(
            'Content-Type: text/plain' ,
            'Content-length: ' . strlen($json) ,
            'Authorization: Basic fOzlSy1JUWCp71S'
        );

        $ch = curl_init();
        curl_setopt($ch , CURLOPT_SSL_VERIFYPEER , 0);
        curl_setopt($ch , CURLOPT_URL , $url);
        curl_setopt($ch , CURLOPT_RETURNTRANSFER , 1);
        curl_setopt($ch , CURLOPT_HEADER , 0);
        curl_setopt($ch , CURLOPT_FAILONERROR , true);
        curl_setopt($ch , CURLOPT_POST , true);
        curl_setopt($ch , CURLOPT_POSTFIELDS , $json);
        curl_setopt($ch , CURLOPT_HTTPHEADER , $headers);

        $response = curl_exec($ch);
        $curlErrno = curl_errno($ch);
        $curlError = curl_error($ch);

        curl_close($ch);

        if ($curlErrno) {
            return array("success" => false , "error" => "Error: " . $curlError . " (" . $curlErrno . ")");
        }
        var_dump($response);
        return [$response];
    }
}
