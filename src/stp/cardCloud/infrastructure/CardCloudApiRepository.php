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


    public function searchSubAccount(string $businessId, string $subAccountId): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/subaccounts/{$subAccountId}";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'GET');
    }


    public function searchMovements(string $businessId, string $subAccountId, string $fromDate, string $toDate): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/subaccounts/{$subAccountId}/movements";
        $apiData = ['from' => $fromDate, 'to' => $toDate];
        return $this->request($apiData, $api, $token, 'GET');
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


    public function searchSubAccountCards(string $businessId, string $subAccountId): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/subaccounts/{$subAccountId}/cards";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'GET');
    }


    public function searchCardDetails(string $businessId, string $cardId): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/card/{$cardId}";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'GET');
    }

    public function searchCardMovements(string $businessId, string $cardId, string $fromDate, string $toDate): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/card/{$cardId}/movements";
        $apiData = ['from' => $fromDate, 'to' => $toDate];
        return $this->request($apiData, $api, $token, 'GET');
    }

    public function searchSubAccounts(string $businessId): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/subaccounts";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'GET');
    }


    public function searchCardSensitive(string $businessId, string $cardId): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/card/{$cardId}/sensitive";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'GET');
    }

    public function updateCardBlockStatus(string $businessId, string $cardId, string $blockStatus): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/card/{$cardId}/{$blockStatus}";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'POST');
    }

    public function searchCardCVV(string $businessId, string $cardId): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/card/{$cardId}/cvv";
        $apiData = [];
        return $this->request($apiData, $api, $token, 'GET');
    }


    public function createTransfer(string $businessId, array $transferData): array
    {
        $credentials = $this->searchCredentials($businessId);
        $signResponse = $this->signIn($credentials->toArray());
        $token = "Authorization: Bearer {$signResponse['access_token']}";
        $api = "{$credentials->apiUrl()}/v1/transfer";
        return $this->request($transferData, $api, $token, 'POST');
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
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        if (empty($response)) {
            throw new \DomainException("Error de API CARD CLOUD: DOES NOT RESPOND ", 400);
        }
        $response = json_decode($response, true);
        if ($this->hasError($httpCode)) {
            $errorMessage = $this->getErrorMessage($response);
            throw new \DomainException($errorMessage, 400);
        }

        return $response;
    }

    private function hasError(int $httpCode): bool
    {
        return $httpCode !== 200;
    }

    public function getErrorMessage(array $response): string
    {
        $errorMessage = $response['error'] ?? $response['message'] ?? '';

        return match ($errorMessage) {
            "Error while decoding the token" => "Error al decodificar el token",
            "You don't have permission to access this resource" => "No tienes permiso para acceder a este recurso",
            "Error blocking card" => "Error al bloquear la tarjeta",
            "Unauthorized" => "No autorizado",
            "Card not found or you do not have permission to access it" => "Tarjeta no encontrada o no tienes 
            permiso para acceder a ella",
            "Error getting sensitive data" => "Error al obtener datos confidenciales",
            "Error getting CVV, please try again later" => "Error al obtener CVV, inténtelo de nuevo más tarde",
            "Subaccount with this ExternalId already exists" => "La subcuenta con este Id ya existe",
            "Subaccount with this Description already exists" => "La subcuenta con esta descripción ya existe",
            "Error creating subaccount" => "Error al crear subcuenta",
            "Error transferring funds" => "Error al transferir fondos",
            default => "Error de API CARD CLOUD: {$errorMessage}",
        };
    }
}
