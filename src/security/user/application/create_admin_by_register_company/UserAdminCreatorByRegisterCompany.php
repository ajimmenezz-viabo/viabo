<?php declare(strict_types=1);


namespace Viabo\security\user\application\create_admin_by_register_company;


use Viabo\backofficeBusiness\business\application\find\ViaboBusinessQuery;
use Viabo\security\user\domain\services\UserValidator;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class UserAdminCreatorByRegisterCompany
{

    public function __construct(
        private UserRepository $repository,
        private UserValidator  $validator,
        private QueryBus       $queryBus,
        private EventBus       $bus
    )
    {
    }

    public function __invoke(
        string $name,
        string $lastname,
        string $phone,
        string $email,
        string $password,
        string $confirmPassword
    ): void
    {
        $this->validator->validateNotExist($email);

        $viaboBusiness = $this->searchViaboBusiness();
        $user = User::createUserAdmin(
            $name,
            $lastname,
            $phone,
            $email,
            $password,
            $confirmPassword,
            $viaboBusiness['id']
        );
        $this->repository->save($user);

        $this->bus->publish(...$user->pullDomainEvents());
    }

    public function searchViaboBusiness(): array
    {
        $viaboBusiness = $this->queryBus->ask(new ViaboBusinessQuery());
        return $viaboBusiness->data[0];
    }
}