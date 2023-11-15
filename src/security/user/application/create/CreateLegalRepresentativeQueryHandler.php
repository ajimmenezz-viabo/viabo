<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\user\domain\UserLastname;
use Viabo\security\user\domain\UserName;
use Viabo\security\user\domain\UserPassword;
use Viabo\security\user\domain\UserPhone;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CreateLegalRepresentativeQueryHandler implements QueryHandler
{
    public function __construct(private LegalRepresentativeCreator $creator)
    {
    }

    public function __invoke(CreateLegalRepresentativeQuery $query): Response
    {
        $name = UserName::create($query->name);
        $lastname = UserLastname::create($query->lastname);
        $phone = UserPhone::create($query->phone);
        $email = UserEmail::create($query->email);
        $password = UserPassword::create($query->password , $query->confirmPassword);

        return $this->creator->__invoke(
            $name ,
            $lastname ,
            $phone ,
            $email ,
            $password ,
    );
    }
}