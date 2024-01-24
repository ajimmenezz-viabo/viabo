<?php declare(strict_types=1);


namespace Viabo\spei\bank\application\find;


use Viabo\spei\bank\domain\Bank;
use Viabo\spei\bank\domain\BankRepository;

final readonly class BanksFinder
{
    public function __construct(private BankRepository $repository)
    {
    }

    public function __invoke(): BankResponse
    {
        $banks = $this->repository->searchAll();
        return new BankResponse(array_map(function (Bank $bank){
            return $bank->toArray();
        }, $banks));
    }
}