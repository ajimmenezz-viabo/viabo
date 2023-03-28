<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


use Viabo\business\commerce\domain\CommerceRepository;

final readonly class CommerceCreator
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(CommerceCreatorRequest $request): void
    {
    }

}