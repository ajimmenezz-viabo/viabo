<?php declare(strict_types=1);


namespace Viabo\catalogs\threshold\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class AnchoringOrderThresholdQueryHandler implements QueryHandler
{
    public function __construct(private AnchoringOrderThresholdFinder $finder)
    {
    }

    public function __invoke(AnchoringOrderThresholdQuery $query): Response
    {
        return $this->finder->__invoke();
    }
}