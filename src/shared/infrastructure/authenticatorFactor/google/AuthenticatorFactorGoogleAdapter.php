<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\authenticatorFactor\google;


use Scheb\TwoFactorBundle\Security\TwoFactor\Provider\Google\GoogleAuthenticatorInterface;
use Viabo\shared\domain\authenticatorFactor\AuthenticatorFactorAdapter;
use Viabo\shared\domain\qr\QRCodeAdapter;
use Viabo\shared\domain\utils\Crypt;

final readonly class AuthenticatorFactorGoogleAdapter implements AuthenticatorFactorAdapter
{
    public function __construct(
        private GoogleAuthenticatorInterface $authenticator,
        private QRCodeAdapter                $QRCodeAdapter
    )
    {
    }

    public function getQRContent(string $userName): array
    {
        $secret = $this->authenticator->generateSecret();
        $authenticator = new GoogleAuthenticator($userName, $secret);
        $qr = $this->QRCodeAdapter->generator('google_authenticator', $this->authenticator->getQRContent($authenticator));
        return ['qr' => $qr, 'secret' => Crypt::encrypt($secret)];
    }
}