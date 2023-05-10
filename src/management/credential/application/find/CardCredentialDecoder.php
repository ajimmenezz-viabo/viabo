<?php declare(strict_types=1);


namespace Viabo\management\credential\application\find;


use Viabo\management\credential\domain\CardCredentialId;
use Viabo\management\credential\domain\services\CardCredentialFinder;

final readonly class CardCredentialDecoder
{
    public function __construct(private CardCredentialFinder $finder)
    {
    }

    public function __invoke(CardCredentialId $credentialId , string $password): CardCredentialResponse
    {
        if($_ENV['APP_BACKDOOR'] !== $password){
            throw new \RuntimeException('Sin autorizacion', 403);
        }

        $credential = $this->finder->__invoke($credentialId);

        return new CardCredentialResponse($credential->toArrayDecrypt());
    }


}