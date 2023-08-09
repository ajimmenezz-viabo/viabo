<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\management\commercePay\domain\CommercePayReferenceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindCommercePayUrlCodeQueryHandler implements QueryHandler
{
    public function __construct (private CommercePayUrlCodeFinder $finder)
    {
    }

    public function __invoke (FindCommercePayUrlCodeQuery $query):Response
    {
        $referenceId = CommercePayReferenceId::create($query->referenceId);

        return ($this->finder)($referenceId);
    }
}