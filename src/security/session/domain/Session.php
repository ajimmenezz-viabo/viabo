<?php declare(strict_types=1);


namespace Viabo\security\session\domain;


use Viabo\security\session\domain\events\LogoutDomainEvent;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Session extends AggregateRoot
{
    public function __construct(
        private SessionId         $id ,
        private UserId            $userId ,
        private SessionLoginDate  $loginDate ,
        private SessionLogoutDate $logoutDate ,
        private SessionActive     $active
    )
    {
    }

    public static function create(UserId $userId , SessionLoginDate $loginDate): self
    {
        return new self(
            new SessionId('') ,
            $userId ,
            $loginDate ,
            new SessionLogoutDate('0000-00-00') ,
            new SessionActive('1')
        );
    }

    public function setLogout(): void
    {
        $this->logoutDate = $this->logoutDate->logout();
        $this->active = $this->active->update('0');
        $this->record(new LogoutDomainEvent($this->userId->value() , $this->logoutDate->value()));
    }
}