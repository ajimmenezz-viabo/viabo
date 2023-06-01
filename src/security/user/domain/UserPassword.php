<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\security\user\domain\exceptions\UserPasswordErrorConfirmation;
use Viabo\security\user\domain\exceptions\UserPasswordNotSecurityLevel;
use Viabo\shared\domain\utils\RandomPassword;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class UserPassword extends StringValueObject
{
    public static string $passwordRandom = '';

    public static function create(string $value , string $confirm): self
    {
        self::validateConfirm($value , $confirm);
        self::validateSecurity($value);
        return new static(self::encrypt($value));
    }

    public static function random(): static
    {
        self::$passwordRandom = RandomPassword::get(specialCharacter: true);
        return self::create(self::$passwordRandom , self::$passwordRandom);
    }

    private static function validateConfirm(string $value , string $confirm): void
    {
        if (strcmp($value , $confirm) != 0) {
            throw new UserPasswordErrorConfirmation();
        }
    }

    public static function validateSecurity(string $value): void
    {
        $invalid = false;
        $message = [];
        $uppercase = preg_match('@[A-Z]@' , $value);
        $lowercase = preg_match('@[a-z]@' , $value);
        $number = preg_match('@[0-9]@' , $value);
        $specialCharacters = preg_match('@[_\-.\@]@' , $value);
        $latinCharacters = preg_match('@[ñÑáéíóúüÁÉÍÓÚÜ]@' , $value);

        if (!$uppercase) {
            $message[] = 'No tiene mayusculas';
            $invalid = true;
        }

        if (!$lowercase) {
            $message[] = 'No tiene minúsculas';
            $invalid = true;
        }

        if (!$number) {
            $message[] = 'No tiene numero';
            $invalid = true;
        }

        if (!$specialCharacters) {
            $message[] = 'No tiene caracteres especiales';
            $invalid = true;
        }

        if ($latinCharacters) {
            $message[] = 'Tiene caracteres latinos';
            $invalid = true;
        }

        if (self::hasTheRequiredLength($value)) {
            $message[] = 'La longitud es menor de 8 o mayor de 16';
            $invalid = true;
        }

        if ($invalid) {
            throw new UserPasswordNotSecurityLevel(implode(',' , $message));
        }
    }

    private static function hasTheRequiredLength(string $value): bool
    {
        return strlen($value) < 8 || strlen($value) > 16;
    }

    private static function encrypt($value): string
    {
        return password_hash($_ENV['APP_PASSWORD_SECURITY'] . $value , PASSWORD_DEFAULT);
    }

    public function isDifferent(string $passwordEntered): bool
    {
        $passwordEntered = $_ENV['APP_PASSWORD_SECURITY'] . $passwordEntered;
        return !password_verify($passwordEntered , $this->value);
    }
}