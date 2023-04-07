<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\symfony;


use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
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
            return $this->JWTEncoder->decode($token);
        } catch (JWTDecodeFailureException) {
            throw new \DomainException('Sin acceso' , 401);
        }
    }
}