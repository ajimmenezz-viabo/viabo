<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\security\user\domain\services\UserValidator;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class LegalRepresentativeCreator
{
    private const PROFILE = '3';
    private UserValidator $validator;

    public function __construct(private UserRepository $repository, private EventBus $bus)
    {
        $this->validator = new UserValidator($this->repository);
    }

    public function __invoke(LegalRepresentativeRequest $request): void
    {
        $user = User::create(
            self::PROFILE ,
            $request->getName(),
            $request->getLastname(),
            $request->getPhone(),
            $request->getEmail(),
            $request->getPassword(),
            $request->getConfirmPassword()
        );

        $this->validator->validateNotExist($user);

        $this->repository->save($user);

        $this->bus->publish(...$user->pullDomainEvents());
    }
}