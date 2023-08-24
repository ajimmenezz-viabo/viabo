<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\management\commerceTransaction\domain\CommercePayTransactionFilterTag;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionResultMessage;
use Viabo\management\commerceTransaction\domain\exceptions\CommerceTransactionsResponseNotFound;
use Viabo\management\shared\domain\paymentGateway\PaymentGatewayAdapter;

final class FinderCommerceTransactions
{
    public function __construct (private PaymentGatewayAdapter $adapter)
    {
    }

    public function __invoke(
        string  $fromDate,
        string  $toDate,
        string  $apiKey,
        array   $terminalsData,
        ?string $page,
        ?string $pageSize
    ):CommerceTransactionsTerminalResponse
    {

        $merchantsId = $this->getMerchantsId($terminalsData);

        $response = $this->getAllMovements($fromDate, $toDate, $apiKey,$page, $pageSize, $merchantsId);

        $filteredItems = $this->filtered($response[0]);

        $cardTags = $this->getFiltersTag($filteredItems,'card_brand');

        $result = ["movements" => $filteredItems, "cardTags" => $cardTags, "pager" => ["total" => count($filteredItems)]];

        return new CommerceTransactionsTerminalResponse($result);
    }
    private function getAllMovements(
        string  $fromDate,
        string  $toDate,
        string  $apiKey,
        ?string $page,
        ?string $pageSize,
        array $merchantsId
    ){
        return array_map(function ($merchantId) use (
            $fromDate,
            $toDate,
            $page,
            $apiKey,
            $pageSize
        ) {
            $queryParams = $this->createQueryParams(
                $fromDate,
                $toDate,
                $merchantId,
                $page,
                $pageSize
            );

            $data = [];
            $data += $this->adapter->searchTerminalTransactions($queryParams,$apiKey);
            return $data;

        }, $merchantsId);
    }
    private function createQueryParams(
        string $fromDate,
        string $toDate,
        string $merchantId,
        ?string $page,
        ?string $pageSize
    ):string
    {
        $params = array(
            'fromDate' => $fromDate,
            'toDate' => $toDate,
            'merchantId' => $merchantId,
            'page' => empty($page) ? '1' : $page ,
            'pageSize' => empty($pageSize) ? '10000' : $pageSize
        );

        return http_build_query($params);
    }

    private function filtered(array $response): array
    {
        $resultMessage = new CommercePayTransactionResultMessage('');

        return array_map(function ($item) use ($resultMessage) {
            return [
                "id" => $item["id"],
                "transaction_date" => $item["transaction_date"],
                "amount" => $item["amount"],
                "approved" => $item["approved"],
                "terminal_id" => $item["terminal_id"],
                "result_message" => $resultMessage->message($item["result_code"]),
                "reversed" => $item["reversed"],
                "card_number" => $item["card_number"],
                "issuer" => $item["issuer"],
                "card_brand" => $item["card_brand"]
            ];
        }, $response["items"]);
    }


    private function getMerchantsId(array $terminalsData): array
    {
        $groupedMerchantsId = array_reduce($terminalsData, function($result, $terminal) {
            $result['merchantId'][] = $terminal['merchantId'];
            return $result;
        }, []);

        return array_unique($groupedMerchantsId["merchantId"]);
    }
    private function getFiltersTag(array $filteredItems, string $tag):array
    {
        $reduce = array_reduce($filteredItems, function(array $result, array $tags) use($tag) {
            $filterTag = new CommercePayTransactionFilterTag('');

            $result[$tag][] = $filterTag->cardBrandIs($tags[$tag]);
            return $result;
        }, []);

        return array_values(array_unique($reduce[$tag]));
    }
}
