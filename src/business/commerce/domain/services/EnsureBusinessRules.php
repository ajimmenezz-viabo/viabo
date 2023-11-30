<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain\services;


use Viabo\business\commerce\domain\Commerce;
use Viabo\business\commerce\domain\exceptions\CommerceSlugExist;
use Viabo\business\commerce\domain\exceptions\CommerceSlugHasSpaces;
use Viabo\business\commerce\domain\exceptions\CommerceSlugNotHaveTerminalVirtual;
use Viabo\business\commerce\domain\exceptions\CommerceTradeNameExist;
use Viabo\management\commerceTerminal\application\find\VirtualTerminalsQuery;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class EnsureBusinessRules
{
    public function __construct(
        private CommerceFinder $finder ,
        private QueryBus       $queryBus
    )
    {
    }

    public function __invoke(string $commerceId , string $tradeName , string $slug): void
    {
        $this->ensureTradeName($commerceId , $tradeName);
        $this->ensureSlug($commerceId , $slug);
    }

    private function ensureTradeName(string $commerceId , string $tradeName): void
    {
        $commerce = $this->searchCommerceByTradeName($commerceId , $tradeName);
        if (!empty($commerce)) {
            throw new CommerceTradeNameExist();
        }
    }

    private function ensureSlug(string $commerceId , string $slug): void
    {
        if (empty($slug)) {
            return;
        }

        if (!preg_match("/^\S+$/", $slug)) {
            throw new CommerceSlugHasSpaces();
        }

        $commerce = $this->searchCommerceBySlug($commerceId , $slug);
        if (!empty($commerce)) {
            throw new CommerceSlugExist();
        }

        $terminals = $this->queryBus->ask(new VirtualTerminalsQuery($commerceId));
        if (empty($terminals)) {
            throw new CommerceSlugNotHaveTerminalVirtual();
        }

    }

    private function searchCommerceByTradeName(string $commerceId , string $tradeName): Commerce|null
    {
        $filters = Filters::fromValues([
            ['field' => 'id' , 'operator' => '<>' , 'value' => $commerceId] ,
            ['field' => 'tradeName.value' , 'operator' => '=' , 'value' => $tradeName]
        ]);
        try {
            return $this->finder->searchCriteria(new Criteria($filters));
        } catch (\DomainException) {
            return null;
        }
    }

    private function searchCommerceBySlug(string $commerceId , string $slug): Commerce|null
    {
        $filters = Filters::fromValues([
            ['field' => 'id' , 'operator' => '<>' , 'value' => $commerceId] ,
            ['field' => 'slug.value' , 'operator' => '=' , 'value' => $slug]
        ]);
        try {
            return $this->finder->searchCriteria(new Criteria($filters));
        } catch (\DomainException) {
            return null;
        }
    }
}