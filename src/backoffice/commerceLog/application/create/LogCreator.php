<?php declare(strict_types=1);


namespace Viabo\backoffice\commerceLog\application\create;


use Viabo\backoffice\commerceLog\domain\Log;
use Viabo\backoffice\commerceLog\domain\LogRepository;

final readonly class LogCreator
{
    public function __construct(private LogRepository $repository)
    {
    }

    public function __invoke(string $agregateId , string $type , array $data): void
    {
        $log = Log::create($agregateId , $type , $data);
        $this->repository->save($log);
    }
}