<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\infrastructure;


use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpRepository;
use Viabo\spei\transaction\domain\Transaction;

final readonly class StpAPIRepository implements StpRepository
{
    public function searchBalance(StpAccount $stpAccount): array
    {
        $data = $stpAccount->decrypt();
        $inputData = [
            'app' => 'getBalance' ,
            'keys' => $data['key'] ,
            'company' => $data['company'] ,
            'account' => $data['number']
        ];

        $response = $this->request($inputData , $data['url']);
        return $response['respuesta'];
    }

    public function processPayment(Transaction $transaction): void
    {
        $keys = $transaction->stpKeys();
        $data = $transaction->toArray();
        $inputData = [
            'app' => 'getOrder' ,
            'keys' => $keys['key'] ,
            'Empresa' => $data['sourceName'] ,
            'TipoPago' => 1 ,
            'ClaveRastreo' => "ROB{$data['trackingKey']}" ,
            'ConceptoPago' => $data['concept'] ,
            'CuentaOrdenante' => $data['sourceAccount'] ,
            'NombreOrdenante' => $data['sourceName'] ,
            'RfcCurpOrdenante' => "ND" ,
            'CuentaBeneficiario' => $data['destinationAccount'] ,
            'NombreBeneficiario' => $data['destinationName'] ,
            'ReferenciaNumerica' => $data['reference'] ,
            'InstitucionOperante' => 90646 ,
            'RfcCurpBeneficiario' => "ND" ,
            'TipoCuentaOrdenante' => 40 ,
            'InstitucionContraparte' => 90646 ,
            'TipoCuentaBeneficiario' => 40
        ];
    }

    public function request(array $inputData , string $api)
    {
        $curl = curl_init();
        curl_setopt($curl , CURLOPT_URL , $api);
        curl_setopt($curl , CURLOPT_RETURNTRANSFER , true);
        curl_setopt($curl , CURLOPT_CUSTOMREQUEST , 'POST');
        curl_setopt($curl , CURLOPT_HTTPHEADER , ['Accept: application/json']);
        curl_setopt($curl , CURLOPT_SSL_VERIFYPEER , false);
        curl_setopt($curl , CURLOPT_POSTFIELDS , json_encode($inputData));
        $response = curl_exec($curl);
        curl_close($curl);

        if (empty($response)) {
            throw new \DomainException("Error de API STP: DOES NOT RESPOND " , 403);
        }

        $response = json_decode($response , true);
        if ($this->hasError($response)) {
            throw new \DomainException("Error de API STP: {$response['mensaje']}" , 403);
        }

        return $response;
    }

    private function hasError(array $response): bool
    {
        return array_key_exists('estado' , $response) && $response['estado'] != '0';
    }
}