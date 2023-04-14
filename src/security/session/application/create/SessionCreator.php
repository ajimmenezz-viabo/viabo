<?php declare(strict_types=1);


namespace Viabo\security\session\application\create;


use Viabo\security\session\domain\services\SessionValidator;
use Viabo\security\session\domain\Session;
use Viabo\security\session\domain\SessionLoginDate;
use Viabo\security\session\domain\SessionRepository;
use Viabo\security\shared\domain\user\UserId;

final readonly class SessionCreator
{
    public function __construct(
        private SessionRepository $repository,
        private SessionValidator $validator
    )
    {
    }

    public function __invoke(UserId $userId, SessionLoginDate $loginDate): void
    {
        $this->validator->closeOpenSession($userId);
        $session = Session::create($userId, $loginDate);
        $this->repository->save($session);
    }
}