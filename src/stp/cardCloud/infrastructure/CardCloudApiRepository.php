<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\stp\cardCloud\domain\CardCloudCredentials;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final class CardCloudApiRepository extends DoctrineRepository implements CardCloudRepository
{
    public function __construct(EntityManager $StpEntityManager)
    {
        parent::__construct($StpEntityManager);
    }

    public function createAccount(string $businessId, string $companyId, string $rfc): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/subaccounts";
        $apiData = [
            "ExternalId" => $companyId,
            "Description" => $rfc,
        ];
        return $this->request($apiData, $api, $token, 'POST');
    }

    private function searchCredentials(string $businessId): CardCloudCredentials
    {
        return $this->repository(CardCloudCredentials::class)->findOneBy(
            ['businessId' => $businessId]
        );
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
        $jsonData = json_encode($inputData);

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $api);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $request);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json', 'Content-Length: ' . strlen($jsonData), $token
        ]);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $jsonData);
        $response = curl_exec($curl);
        curl_close($curl);

        if (empty($response)) {
            throw new \DomainException("Error de API CARD CLOUD: DOES NOT RESPOND ", 403);
        }

        $response = json_decode($response, true);
        if ($this->hasError($response)) {
            throw new \DomainException("Error de API CARD CLOUD", 403);
        }

        return $response;
    }

    private function hasError(array $response): bool
    {
        return array_key_exists('error', $response) || array_key_exists('message', $response);
    }
}
