<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\management\commerceTransaction\domain\CommercePayTransactionResultMessage;
use Viabo\management\shared\domain\paymentGateway\PaymentGatewayAdapter;
use Viabo\shared\domain\Utils;

final readonly class FinderCommerceTransactions
{
    public function __construct(private PaymentGatewayAdapter $adapter)
    {
    }

    public function __invoke(
        string  $fromDate,
        string  $toDate,
        array   $apiData,
        ?string $terminalId,
        array   $terminalsData,
        ?array $movementsConsolidated,
        ?string $page,
        ?string $pageSize
    ):CommerceTransactionsResponse
    {
        if(empty($apiData)){ return new CommerceTransactionsResponse([]);}

        $transactionsConsolidated = $this->filteredMainTransactionId($movementsConsolidated);

        $terminals = $this->extractTerminalData($terminalsData);

        $response = $this->getMovements(
            $fromDate,
            $toDate,
            $apiData['apiKey'],
            $terminalId,
            $page,
            $pageSize,
            $terminals,
            $transactionsConsolidated
        );

        return new CommerceTransactionsResponse($response);
    }

    private function getMovements(
        string $fromDate,
        string $toDate,
        string $apiKey,
        ?string $terminalId,
        ?string $page,
        ?string $pageSize,
        array $terminals,
        ?array $transactionsConsolidated
    ): array
    {
        return empty($terminalId) ?
            $this->getAllMovements($fromDate, $toDate, $apiKey, $page, $pageSize, $terminals,$transactionsConsolidated)
            :
            $this->getMovementsByTerminalId(
                $fromDate, $toDate, $apiKey, $terminalId, $page, $pageSize, $terminals,$transactionsConsolidated
            );
    }
    private function getAllMovements(
        string  $fromDate,
        string  $toDate,
        string  $apiKey,
        ?string $page,
        ?string $pageSize,
        array $terminals,
        ?array $transactionsConsolidated
    ): array
    {
        $filtered = [];
        $movements = [];
        $total = 0;
        foreach ($terminals['merchantsId'] as $merchantsId) {
            $queryParams = $this->createQueryParams(
                $fromDate,
                $toDate,
                $merchantsId,
                "",
                $page,
                $pageSize
            );

            $data = $this->adapter->searchTerminalTransactions($queryParams, $apiKey);
            if(!empty($data['items'])){
                $filtered = [$this->filteredData($data['items'],$terminals,$transactionsConsolidated)];
                $movements[] = $filtered[0]['items'];
                $total += count($filtered[0]['items']);
            }
        }

        $mergeMovements = $this->mergeMovements($movements);

        return  [
            "movements" => $mergeMovements,
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
        array $terminals,
        ?array $transactionsConsolidated
    ): array
    {
        $queryParams = $this->createQueryParams(
            $fromDate,
            $toDate,
            "",
            $terminalId,
            $page,
            $pageSize
        );

        $data = $this->adapter->searchTerminalTransactions($queryParams, $apiKey);

        $response = $this->filteredData($data['items'],$terminals,$transactionsConsolidated);


        return [
            "movements" => $response['items'],
            "pager" => $data['pager']
        ];
    }

    private function createQueryParams(
        string  $fromDate,
        string  $toDate,
        ?string $merchantId,
        ?string $terminalId,
        ?string $page,
        ?string $pageSize
    ):string
    {
        $params = array(
            'fromDate' => $fromDate,
            'toDate' => $toDate,
            empty($merchantId)?'':'merchantId' => $merchantId,
            empty($terminalId)?'':'terminalId' => $terminalId,
            'page' => empty($page) ? '1' : $page ,
            'pageSize' => empty($pageSize) ? '10000' : $pageSize
        );

        return http_build_query($params);
    }

    private function filteredData(array $response, array $terminals, ?array $transactionsConsolidated): array
    {
        $resultMessage = new CommercePayTransactionResultMessage('');

        $filteredData = [];

        foreach ($response as $item) {
            if (isset($terminals['terminals'][$item["terminal_id"]])) {
                $filteredData[] = [
                    "id" => $item["id"],
                    "transaction_date" => $item["transaction_date"],
                    "amount" => $item["amount"],
                    "approved" => $item["approved"],
                    "terminal_id" => $item["terminal_id"],
                    "terminal_name" => $terminals['terminals'][$item["terminal_id"]],
                    "result_message" => $resultMessage->message($item["result_code"]),
                    "reversed" => $item["reversed"],
                    "card_number" => $item["card_number"],
                    "issuer" => $item["issuer"],
                    "card_brand" => $item["card_brand"],
                    "conciliated" => $this->isConsolidated($item["id"],$transactionsConsolidated)
                ];
            }
        }

        return ['items' => $filteredData];
    }

    private function extractTerminalData(array $terminalsData): array
    {
        $grouped = array_reduce($terminalsData, function($result, $terminal) {
            $result['merchantsId'][]=$terminal['merchantId'];
            $result['terminals'][$terminal['terminalId']] = $terminal['name'];
            return $result;
        }, []);

        $grouped['merchantsId'] = Utils::removeDuplicateElements($grouped['merchantsId']);

        return $grouped;
    }

    private function mergeMovements(array $movements): array
    {
        $mergedArray = [];

        foreach ($movements as $sourceArray) {
            $mergedArray = array_merge($mergedArray, $sourceArray);
        }
        return $mergedArray;
    }

    private function filteredMainTransactionId(?array $movementsConsolitaded): array
    {
        $transactionsId = array_map(function (array $movementConsolitaded){
            return $movementConsolitaded['transactionId'];
        },$movementsConsolitaded);

        return Utils::removeDuplicateElements($transactionsId);
    }

    private function isConsolidated(mixed $id, ?array $transactionsConsolidated):bool
    {
        return in_array($id, $transactionsConsolidated);
    }

}
