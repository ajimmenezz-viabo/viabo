<?php declare(strict_types=1);


namespace Viabo\management\shared\infrastructure\paymentCash;


use Viabo\management\conciliation\domain\Conciliation;
use Viabo\management\shared\domain\paymentCash\PaymentCashAdapter;

final class PaymentCashPayCashAdapterAdapter implements PaymentCashAdapter
{
    private string $key = '';
    private string $url = '';

    public function reference(Conciliation $conciliation , array $apiData): string
    {
        $this->key = $apiData['key'];
        $this->url = $apiData['url'];

        $data = [
            'url' => "$this->url/v1/reference" ,
            'method' => 'POST' ,
            'token' => $this->token() ,
            'fields' => [
                'Amount' => $conciliation->amount()->value() ,
                'ExpirationDate' => '' ,
                'Value' => $conciliation->payCashKey() ,
                'Type' => 'true'
            ]
        ];
        $response = $this->request($data);
        return $response['Reference'];
    }

    private function token(): string
    {
        $data = ['url' => "$this->url/v1/authre?key=$this->key" , 'method' => 'GET'];
        $response = $this->request($data);
        return $response['Authorization'];
    }

    private function request(array $data): array
    {
        $token = $data['token'] ?? '';
        $fields = $data['fields'] ?? '';

        $options = [
            CURLOPT_URL => $data['url'] ,
            CURLOPT_RETURNTRANSFER => true ,
            CURLOPT_ENCODING => '' ,
            CURLOPT_MAXREDIRS => 10 ,
            CURLOPT_TIMEOUT => 0 ,
            CURLOPT_FOLLOWLOCATION => true ,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1 ,
            CURLOPT_CUSTOMREQUEST => $data['method'] ,
            CURLOPT_POSTFIELDS => json_encode($fields) ,
            CURLOPT_HTTPHEADER => [
                "Authorization: $token" ,
                'Content-Type: application/json'
            ]
        ];

        $curl = curl_init();
        curl_setopt_array($curl , $options);
        $response = curl_exec($curl);
        curl_close($curl);

        $response = $this->format($response);
        if ($this->hasError($response)) {
            $message = $response['ErrorMessage'] ?? $response['message'];
            throw new \DomainException("Error de API PayCash: $message" , 400);
        }

        return $response;
    }

    private function format(bool|string $response): array
    {
        return is_bool($response) ? [
            'ErrorCode' => '111' ,
            'ErrorMessage' => 'Invalid API'
        ] : json_decode($response , true);
    }

    private function hasError(array $response): bool
    {
        return !array_key_exists('ErrorCode' , $response) || !empty($response['ErrorCode']);
    }

}