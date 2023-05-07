<?php declare(strict_types=1);


namespace Viabo\management\credential\infrastructure;


use Viabo\management\credential\domain\CardCredential;
use Viabo\management\credential\domain\CardPaymentProcessorAdapter;

final class CardPaymentProcessorSETAdapter implements CardPaymentProcessorAdapter
{
    public function register(CardCredential $credential): void
    {
        $this->registerUser($credential);
        $data = [
            'inCardPlatform' => true ,
            'clientKey' => $credential->clientKey() ,
            'clientToken' => $this->token($credential->clientKey()) ,
            'idUser' => $credential->userId()->valueDecrypt() ,
            'userCard' => $credential->userName()->valueDecrypt() ,
            'binCard' => $credential->cardNumber(),
            'moyeCard' => $credential->cardExpirationDate() ,
            'keyCompany' => $credential->companyKey() ,
        ];
        $this->request($data);
    }

    private function registerUser(CardCredential $credential): void
    {
        $data = [
            'inRegisterPlatform' => true ,
            'clientKey' => $credential->clientKey() ,
            'clientToken' => $this->token($credential->clientKey()) ,
            'userCard' => $credential->userName()->valueDecrypt() ,
            'passCard' => $credential->password()->valueDecrypt() ,
            'emailCard' => $credential->email()->valueDecrypt() ,
            'keyCompany' => $credential->companyKey() ,
        ];
        $response = $this->request($data);
        $credential->setUserId(strval($response['idUser']));
    }

    private function token(string $clientKey): string
    {
        $data = ['keyTrans' => true , 'clientKey' => $clientKey];
        $response = $this->request($data);
        return $response['AuthorizationCode'];
    }

    public function request(array $inputData)
    {
        $headers = ['Accept: application/json'];
        $curl = curl_init();
        curl_setopt($curl , CURLOPT_URL , $_ENV['APP_SET_URL']);
        curl_setopt($curl , CURLOPT_RETURNTRANSFER , true);
        curl_setopt($curl , CURLOPT_CUSTOMREQUEST , 'POST');
        curl_setopt($curl , CURLOPT_HTTPHEADER , $headers);
        curl_setopt($curl , CURLOPT_SSL_VERIFYPEER , false);
        curl_setopt($curl , CURLOPT_POSTFIELDS , json_encode($inputData));
        $response = json_decode(curl_exec($curl) , true);
        curl_close($curl);

        if ($this->hasError($response)) {
            throw new \DomainException("Error de API SET: {$response['ErrorMessage']}" , 401);
        }

        return $response;
    }

    private function hasError(array $response): bool
    {
        return array_key_exists('ErrorMessage' , $response);
    }
}