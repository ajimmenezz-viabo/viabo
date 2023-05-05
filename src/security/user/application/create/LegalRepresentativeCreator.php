<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\user\domain\services\UserValidator;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserLastname;
use Viabo\security\user\domain\UserName;
use Viabo\security\user\domain\UserPassword;
use Viabo\security\user\domain\UserPhone;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class LegalRepresentativeCreator
{
    private UserValidator $validator;

    public function __construct(private UserRepository $repository , private EventBus $bus)
    {
        $this->validator = new UserValidator($this->repository);
    }

    public function __invoke(
        UserName     $name ,
        UserLastname $lastname ,
        UserPhone    $phone ,
        UserEmail    $email ,
        UserPassword $password
    ): LegalRepresentativeResponse
    {
        $user = User::createLegalRepresentative(
            $name,
            $lastname,
            $phone,
            $email,
            $password,
        );

        $this->validator->validateNotExist($user);

        $this->repository->save($user);

        $this->bus->publish(...$user->pullDomainEvents());

        return new LegalRepresentativeResponse($user->id()->value());
    }
}