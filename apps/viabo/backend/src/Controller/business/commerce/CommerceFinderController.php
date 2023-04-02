<?php

namespace Viabo\Backend\Controller\business\commerce;

use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\find\CommerceFinderCommand;
use Viabo\business\commerce\application\find\CommerceFinderCommandHandler;


final class CommerceFinderController extends AbstractController
{
    public function __construct(
        private readonly CommerceFinderCommandHandler $handler ,
        private readonly JWTEncoderInterface          $JWTEncoder
    )
    {
    }

    public function __invoke(string $token): Response
    {
        try {
            $tokenData = $this->JWTEncoder->decode($token);
            $data = ($this->handler)(new CommerceFinderCommand($tokenData['id']));

            return new JsonResponse(['data' => $data]);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        } catch (JWTDecodeFailureException $e) {
            return new JsonResponse('Sin acceso' , 401);
        }
    }
}