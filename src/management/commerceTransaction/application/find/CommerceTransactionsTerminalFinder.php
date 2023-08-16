<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\management\commerceTransaction\domain\exceptions\CommerceTransactionsResponseNotFound;
use Viabo\management\shared\domain\paymentGateway\PaymentGatewayAdapter;

final readonly class CommerceTransactionsTerminalFinder
{
    public function __construct (private PaymentGatewayAdapter $adapter)
    {
    }

    public function __invoke(
        string $fromDate,
        string $toDate,
        string $merchantId,
        string $terminalId,
        string $apiKey,
        ?string $page,
        ?string $pageSize
    ):CommerceTransactionsTerminalResponse
    {

        $queryParams = $this->createQueryParams(
            $fromDate,
            $toDate,
            $merchantId,
            $terminalId,
            $page,
            $pageSize
        );

        $response = $this->adapter->searchTerminalTransactions($queryParams,$apiKey);

        if(empty($response)){
            throw new CommerceTransactionsResponseNotFound();
        }

        $filteredItems = $this->filtered($response);

        $result = ["movements" => $filteredItems, "pager" => $response["pager"]];

        return new CommerceTransactionsTerminalResponse($result);
    }

    private function createQueryParams(
        string $fromDate,
        string $toDate,
        string $merchantId,
        string $terminalId,
        ?string $page,
        ?string $pageSize
    ):string
    {
        $params = array(
            'fromDate' => $fromDate,
            'toDate' => $toDate,
            'merchantId' => $merchantId,
            'terminalId' => $terminalId,
            'page' => empty($page) ? '1' : $page ,
            'pageSize' => empty($pageSize) ? '10000' : $pageSize
        );

        return http_build_query($params);
    }

    private function filtered(array $response): array
    {
        return array_map(function ($item) {
            return [
                "id" => $item["id"],
                "transaction_date" => $item["transaction_date"],
                "amount" => $item["amount"],
                "authorization_number" => $item["authorization_number"],
                "reference" => $item["reference"],
                "approved" => $item["approved"],
                "reversed" => $item["reversed"],
                "card_number" => $item["card_number"],
                "issuer" => $item["issuer"],
                "card_brand" => $item["card_brand"]
            ];
        }, $response["items"]);
    }
}
