<?php declare(strict_types=1);


namespace Viabo\spei\shared\infrastructure\stp;


use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\transaction\domain\Transaction;

final readonly class StpAPIRepository implements StpRepository
{
    public function searchBalance(StpAccount $stpAccount): array
    {
        $data = $stpAccount->decrypt();
        $inputData = [
            'app' => 'getBalance',
            'keys' => $data['key'],
            'company' => $data['company'],
            'account' => $data['number']
        ];

        $response = $this->request($inputData, $data['url']);
        return $response['respuesta'];
    }

    public function searchSpeiIn(array $stpAccount, string $date): array
    {
        $inputData = [
            'app' => 'getCollectionSTP',
            'keys' => $stpAccount['key'],
            'company' => $stpAccount['company'],
            'fechaOperacion' => $date
        ];

        return $this->request($inputData, $stpAccount['url']);
    }

    public function processPayment(Transaction $transaction): string
    {
        $keys = $transaction->stpKeys();
        $data = $transaction->toArray();
        $inputData = [
            'app' => 'getOrder',
            'keys' => $keys['key'],
            'Monto' => $data['amount'],
            'Empresa' => $data['sourceName'],
            'TipoPago' => 1,
            'ClaveRastreo' => $data['trackingKey'],
            'ConceptoPago' => $data['concept'],
            'CuentaOrdenante' => $data['sourceAccount'],
            'NombreOrdenante' => $data['sourceName'],
            'RfcCurpOrdenante' => "ND",
            'CuentaBeneficiario' => $data['destinationAccount'],
            'NombreBeneficiario' => $data['destinationName'],
            'ReferenciaNumerica' => $data['reference'],
            'InstitucionOperante' => 90646,
            'RfcCurpBeneficiario' => "ND",
            'TipoCuentaOrdenante' => 40,
            'InstitucionContraparte' => $data['destinationBankCode'],
            'TipoCuentaBeneficiario' => 40
        ];

        $response = $this->request($inputData, $keys['url']);
        return strval($response['resultado']['id']);
    }

    public function speiOut(array $stpAccount): array
    {
        $inputData = [
            'app' => 'getConciliation',
            'keys' => $stpAccount['key'],
            'company' => $stpAccount['company']
        ];

        $response = $this->request($inputData, $stpAccount['url']);
        return $response['datos'];
    }

    public function request(array $inputData, string $api)
    {

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $api);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Accept: application/json']);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($inputData));
        $response = curl_exec($curl);
        curl_close($curl);

        if (empty($response)) {
            throw new \DomainException("Error de API STP: DOES NOT RESPOND ", 403);
        }

        $response = json_decode($response, true);
        if ($this->hasError($response)) {
            throw new \DomainException("Error de API STP: {$response['mensaje']}", 403);
        }

        return $response;
    }

    private function hasError(array $response): bool
    {
        return array_key_exists('estado', $response) && $response['estado'] != '0';
    }
}