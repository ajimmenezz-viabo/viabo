<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\application\find;


use Viabo\management\speiDeposit\domain\Deposit;
use Viabo\management\speiDeposit\domain\DepositAPIKey;
use Viabo\management\speiDeposit\domain\DepositRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class DepositReferenceFinder
{
    public function __construct(private DepositRepository $repository)
    {
    }

    public function __invoke(DepositAPIKey $apiKey): DepositReferenceResponse
    {
        $filter = Filters::fromValues([
            ['field' => 'apiKey.value' , 'operator' => '=' , 'value' => $apiKey->value()]
        ]);
        $deposits = $this->repository->searchCriteria(new Criteria($filter));

        return new DepositReferenceResponse($this->getReferenceData($deposits));
    }

    private function getReferenceData(?array $deposits): array
    {
        if (empty($deposits)) {
            return [];
        }

        return array_map(function (Deposit $deposit) {
            return $deposit->toArrayReference();
        } , $deposits)[0];
    }
}