<?php

namespace Viabo\Backend\Controller\security\code\delete;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\code\application\update\CodeChecker;
use Viabo\security\code\application\update\CodeCheckerRequest;


final class CodeCheckerController extends AbstractController
{
    public function __construct(
        private readonly CodeChecker         $updater ,
        private readonly JWTEncoderInterface $JWTEncoder
    )
    {
    }

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $tokenData = $this->JWTEncoder->decode($data['token']);
            ($this->updater)(new CodeCheckerRequest($tokenData['id'], $data['verificationCode']));

            return new JsonResponse('' , Response::HTTP_OK);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse('Usuario no autorizado' , 401);
        }
    }
}