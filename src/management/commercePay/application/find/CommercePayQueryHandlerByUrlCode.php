<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\management\commercePay\domain\CommercePayUrlCode;
use Viabo\management\commercePay\domain\exceptions\CommercePayUrlCodeNotExist;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommercePayQueryHandlerByUrlCode implements QueryHandler
{
    public function __construct(private CommercePayFinderByUrlCode $finder)
    {
    }

    public function __invoke(CommercePayQueryByUrlCode $query): Response
    {
        try {
            $urlCode = new CommercePayUrlCode($query->urlCode);
        } catch (\DomainException) {
            throw new CommercePayUrlCodeNotExist();
        }

        return ($this->finder)($urlCode);
    }
}
