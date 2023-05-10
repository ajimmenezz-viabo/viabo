<?php declare(strict_types=1);


namespace Viabo\management\credential\application\find;


use Viabo\management\credential\domain\CardCredentialId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CardCredentialDecryptQueryHandler implements QueryHandler
{
    public function __construct(private CardCredentialDecoder $decoder)
    {
    }

    public function __invoke(CardCredentialDecryptQuery $query): Response
    {
        $credential = new CardCredentialId($query->cardCredentialId);

        return $this->decoder->__invoke($credential, $query->password);
    }
}