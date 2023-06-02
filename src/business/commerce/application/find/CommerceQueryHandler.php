<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;
use Viabo\shared\domain\DomainError;

final readonly class CommerceQueryHandler implements QueryHandler
{
    public function __construct(private CommerceFinder $finder)
    {
    }

    public function __invoke(CommerceQuery $query): Response
    {
        try {
            return $this->finder->commerce(CommerceId::empty() , new CommerceLegalRepresentative($query->userId));
        } catch (DomainError) {
            return new CommerceResponse(['id' => '']);
        }
    }
}