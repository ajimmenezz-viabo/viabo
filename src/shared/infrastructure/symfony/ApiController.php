<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\symfony;


use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTEncodeFailureException;
use Viabo\shared\domain\bus\command\Command;
use Viabo\shared\domain\bus\command\CommandBus;
use Viabo\shared\domain\bus\query\Query;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\shared\domain\bus\query\Response;

abstract readonly class ApiController
{
    public function __construct(
        private QueryBus            $queryBus ,
        private CommandBus          $commandBus ,
        private JWTEncoderInterface $JWTEncoder
    )
    {
    }

    protected function dispatch(Command $command): void
    {
        $this->commandBus->dispatch($command);
    }

    protected function ask(Query $query): ?Response
    {
        return $this->queryBus->ask($query);
    }

    protected function decode(string $token): array
    {
        try {
            $token = explode(' ' , $token);
            return $this->JWTEncoder->decode($token[1]);
        } catch (JWTDecodeFailureException) {
            throw new \DomainException('Sin acceso' , 401);
        }
    }

    protected function encode(array $data): string
    {
        try {
            return $this->JWTEncoder->encode($data);
        } catch (JWTEncodeFailureException) {
            throw new \DomainException('Sin acceso' , 401);
        }
    }

    protected function OpensslDecrypt(array $requestData)
    {
        try {
            $ciphertext = base64_decode($requestData['ciphertext']);
            $iv = base64_decode($requestData['iv']);
            $plaintext = openssl_decrypt($ciphertext , 'AES-256-CBC' , $_ENV['APP_OPENSSL'] , OPENSSL_RAW_DATA , $iv);
            return !$plaintext ? throw new \DomainException() : json_decode($plaintext , true);
        } catch (\ErrorException) {
            throw new \DomainException('Error de cifrado' , 406);
        }

    }
}