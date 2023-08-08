<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayUrlCode;
use Viabo\management\commercePay\domain\CommercePayView;
use Viabo\management\commercePay\domain\exceptions\CommercePayUrlCodeNotExist;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercePayFinder
{
    public function __construct(private CommercePayRepository $repository)
    {
    }

    public function __invoke(CommercePayUrlCode $urlCode): FindCommercePayResponse
    {
        $filter = Filters::fromValues([
            ['field' => 'urlCode' , 'operator' => '=' , 'value' => $urlCode->value() ]
        ]);
        $commercePay = $this->repository->searchCriteriaView(new Criteria($filter));

        if (empty($commercePay)) {
            throw new CommercePayUrlCodeNotExist();
        }

        $commercePay = array_map(function (CommercePayView $pay) {
            return $pay->toLinkDataArray();
        } , $commercePay);

        return new FindCommercePayResponse($commercePay[0]);
    }
}
