<?php

namespace Viabo\Backend\Controller\security\user\create;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\security\user\application\create\LegalRepresentativeCreator;
use Viabo\security\user\application\create\LegalRepresentativeRequest;


final class LegalRepresentativeCreatorController extends AbstractController
{

    public function __construct(private readonly LegalRepresentativeCreator $creator)
    {
    }

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $request = new LegalRepresentativeRequest(
                $data['name'],
                $data['lastname'],
                $data['phone'],
                $data['email'],
                $data['password'],
                $data['confirmPassword']
            );
            $this->creator->__invoke($request);

            return new JsonResponse('' , Response::HTTP_OK);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage() , $exception->getCode());
        }
    }
}