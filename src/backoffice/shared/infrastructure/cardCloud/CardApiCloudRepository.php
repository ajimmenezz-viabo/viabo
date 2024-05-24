<?php declare(strict_types=1);

namespace Viabo\backoffice\shared\infrastructure\cardCloud;

use Viabo\backoffice\shared\domain\cardCloud\CardCloudRepository;

final class CardApiCloudRepository implements CardCloudRepository
{

    public function createAccount(array $company, array $credentials): array
    {
        $signResponse = $this->signIn($credentials);
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials['apiUrl']}/v1/subaccounts";
        $apiData = [
            "ExternalId" => $company['id'],
            "Description" => $company['rfc'],
        ];
        return $this->request($apiData, $api, $token, 'POST');
    }

    private function signIn(array $credentials): array
    {
        $api = "{$credentials['apiUrl']}/auth/login";
        $apiData = [
            'email' => $credentials['user'],
            'password' => $credentials['password'],
        ];
        return $this->request($apiData, $api, '', 'POST');
    }

    private function request(array $inputData, string $api, string $token, string $request): array
    {

        $httpHeader = empty($token) ? ['Accept: application/json'] : ['Accept: application/json', $token];
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $api);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $request);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $httpHeader);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($inputData));
        $response = curl_exec($curl);
        curl_close($curl);

        if (empty($response)) {
            throw new \DomainException("Error de API STP CARD: DOES NOT RESPOND ", 403);
        }

        $response = json_decode($response, true);
        if ($this->hasError($response)) {
            $message = $response['error'];
            throw new \DomainException("Error de API STP CARD: $message", 403);
        }

        return $response;
    }

    private function hasError(array $response): bool
    {
        return array_key_exists('error', $response) && $response['error'] === 'Unauthorized';
    }
}
