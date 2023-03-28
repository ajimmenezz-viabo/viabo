<?php

namespace Viabo\Backend\Controller\security\user\find;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\find\LegalRepresentativeFinder;
use Viabo\security\user\application\find\LegalRepresentativeFinderRequest;


final class LegalRepresentativeFinderController extends AbstractController
{

    public function __construct(
        private readonly LegalRepresentativeFinder $finder ,
        private readonly JWTEncoderInterface       $jwt
    )
    {
    }

    public function __invoke(string $username): Response
    {
        try {
            $request = new LegalRepresentativeFinderRequest($username);
            $userId = $this->finder->__invoke($request);
            $token = $this->jwt->encode(['id' => $userId]);

            return new JsonResponse(['token' => $token] , Response::HTTP_OK);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}