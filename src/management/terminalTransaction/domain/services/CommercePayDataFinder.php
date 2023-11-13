<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\domain\services;
use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\management\terminalTransaction\domain\CommercePayRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercePayDataFinder
{
        public function __construct(private CommercePayRepository $repository)
        {
        }

    public function __invoke(CommercePayId $id):array
    {
        $filter = Filters::fromValues([
            ['field' => 'id.value' , 'operator' => '=' , 'value' => $id->value() ]
        ]);

        return $this->repository->searchCriteria(new Criteria($filter));
    }
}
