<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\services\CommerceFinder as CommerceFinderService;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommerceFinderBySlug
{
    public function __construct(private CommerceFinderService $finder)
    {
    }

    public function __invoke(string $slug): CommerceResponse
    {
        $filter = Filters::fromValues([
            ['field' => 'slug.value' , 'operator' => '=' , 'value' => $slug]
        ]);

        $commerce = $this->finder->searchCriteria(new Criteria($filter));
        return new CommerceResponse($commerce->toArray());
    }
}