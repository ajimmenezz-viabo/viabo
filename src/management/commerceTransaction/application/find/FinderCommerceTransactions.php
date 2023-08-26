<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\management\commerceTransaction\domain\CommercePayTransactionFilterTag;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionGlobalAmount;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionResultMessage;
use Viabo\management\shared\domain\paymentGateway\PaymentGatewayAdapter;
use Viabo\shared\domain\Utils;

final readonly class FinderCommerceTransactions
{
    public function __construct (
        private PaymentGatewayAdapter $adapter,
        private CommercePayTransactionGlobalAmount $globalAmount,
    ){
    }

    public function __invoke(
        string  $fromDate,
        string  $toDate,
        string  $apiKey,
        ?string  $terminalId,
        array   $terminalsData,
        ?string $page,
        ?string $pageSize
    ):CommerceTransactionsResponse
    {
        $terminals = $this->extractTerminalData($terminalsData);

        $response = $this->getMovements($fromDate, $toDate, $apiKey,$terminalId,$page, $pageSize, $terminals);

        return new CommerceTransactionsResponse($response);
    }

    private function getMovements(
        string $fromDate,
        string $toDate,
        string $apiKey,
        ?string $terminalId,
        ?string $page,
        ?string $pageSize,
        array $terminals
    ): array
    {
        return empty($terminalId) ?
            $this->getAllMovements($fromDate, $toDate, $apiKey, $page, $pageSize, $terminals)
            :
            $this->getMovementsByTerminalId($fromDate, $toDate, $apiKey, $terminalId, $page, $pageSize, $terminals);
    }
    private function getAllMovements(
        string  $fromDate,
        string  $toDate,
        string  $apiKey,
        ?string $page,
        ?string $pageSize,
        array $terminals
    ): array
    {
        $filtered = [];
        $movements = [];
        $tags = [];
        $total = 0;
        $amount = 0;
        foreach ($terminals as $terminalId=>$value) {
            $queryParams = $this->createQueryParams(
                $fromDate,
                $toDate,
                strval($terminalId),
                $page,
                $pageSize
            );

            $data = $this->adapter->searchTerminalTransactions($queryParams, $apiKey);
            if(!empty($data['items'])){
                $filtered = [$this->filteredData($data['items'],$terminals)];
                $movements[] = $filtered[0]['items'];
                $total += count($filtered[0]['items']);
                $amount += $this->globalAmount->total();
                $tags[] = [$filtered[0]['tags']];
            }
        }
        $tagsCompressed = $this->compressedTags($tags);

        $mergeMovements = $this->mergeMovements($movements);

        return  [
            "movements" => $mergeMovements,
            "tags" => $tagsCompressed,
            "balance" => ['amount'=> number_format($amount,2),'month' => $this->getMonthBalance($fromDate)],
            "pager" => ["total" => $total]
        ];


    }

    private function getMovementsByTerminalId(
        string  $fromDate,
        string  $toDate,
        string  $apiKey,
        string  $terminalId,
        ?string $page,
        ?string $pageSize,
        array $terminals
    ): array
    {
        $queryParams = $this->createQueryParams(
            $fromDate,
            $toDate,
            $terminalId,
            $page,
            $pageSize
        );

        $data = $this->adapter->searchTerminalTransactions($queryParams, $apiKey);

        $response = $this->filteredData($data['items'],$terminals);


        return [
            "movements" => $response['items'],
            "tags" => $response['tags'],
            "balance" => ['amount'=>number_format($this->globalAmount->total(),2),'month' => $this->getMonthBalance($fromDate)],
            "pager" => $data['pager']
        ];
    }

    private function createQueryParams(
        string  $fromDate,
        string  $toDate,
        ?string  $terminalId,
        ?string $page,
        ?string $pageSize
    ):string
    {
        $params = array(
            'fromDate' => $fromDate,
            'toDate' => $toDate,
            empty($terminalId)?'':'terminalId' => $terminalId,
            'page' => empty($page) ? '1' : $page ,
            'pageSize' => empty($pageSize) ? '10000' : $pageSize
        );

        return http_build_query($params);
    }

    private function filteredData(array $response, array $terminals): array
    {
        $resultMessage = new CommercePayTransactionResultMessage('');
        $filterTag = new CommercePayTransactionFilterTag('');

        $filteredData = [];
        $tags = [];

        foreach ($response as $item) {

            if ($item["approved"]) {
                $this->globalAmount->sum(floatval($item["amount"]));
            }

            $filteredData[] = [
                "id" => $item["id"],
                "transaction_date" => $item["transaction_date"],
                "amount" => $item["amount"],
                "approved" => $item["approved"],
                "terminal_id" => $item["terminal_id"],
                "terminal_name" => $terminals[$item["terminal_id"]],
                "result_message" => $resultMessage->message($item["result_code"]),
                "reversed" => $item["reversed"],
                "card_number" => $item["card_number"],
                "issuer" => $item["issuer"],
                "card_brand" => $item["card_brand"]
            ];

            $tags['card_brand'][] = $filterTag->cardBrandIs($item["card_brand"]);
            $tags['approved'][] = $filterTag->isApproved($item["approved"]);
        }

        $cardBrand = empty($tags) ? [] : Utils::removeDuplicateElements($tags['card_brand']);
        $approved = empty($tags) ? [] : Utils::removeDuplicateElements($tags['approved']);
        return [
            'items' => array_filter($filteredData),
            'tags' => ['card_brand' => $cardBrand,'approved'=>$approved],
        ];
    }


    private function extractTerminalData(array $terminalsData): array
    {
        $grouped = array_reduce($terminalsData, function($result, $terminal) {
            $result[$terminal['terminalId']] = $terminal['name'];
            return $result;
        }, []);

        return $grouped;
    }

    private function getMonthBalance(string $fromDate): string
    {
        $timestamp = strtotime($fromDate);

        $month = date('m', $timestamp);
        $meses = [
            '01' => 'ENERO',
            '02' => 'FEBRERO',
            '03' => 'MARZO',
            '04' => 'ABRIL',
            '05' => 'MAYO',
            '06' => 'JUNIO',
            '07' => 'JULIO',
            '08' => 'AGOSTO',
            '09' => 'SEPTIEMBRE',
            '10' => 'OCTUBRE',
            '11' => 'NOVIEMBRE',
            '12' => 'DICIEMBRE',
        ];
        return $meses[$month];
    }

    private function compressedTags(array $tags): array
    {
        $compressedTags = [];

        foreach ($tags as $group) {
            foreach ($group[0] as $category => $values) {
                if (!isset($compressedTags[$category])) {
                    $compressedTags[$category] = $values;
                } else {
                    $compressedTags[$category] = array_unique(array_merge($compressedTags[$category], $values));
                }
            }
        }
        $compressedArray = [];
        foreach ($compressedTags as $category => $values) {
            $compressedArray[] = [$category => array_values($values)];
        }
        return $compressedArray;
    }

    private function mergeMovements(array $movements): array
    {
        $mergedArray = [];

        foreach ($movements as $sourceArray) {
            $mergedArray = array_merge($mergedArray, $sourceArray);
        }
        return $mergedArray;
    }

}
