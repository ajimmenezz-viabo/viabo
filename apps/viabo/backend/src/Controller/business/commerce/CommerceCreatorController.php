<?php
namespace Viabo\Backend\Controller\business\commerce;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\business\commerce\application\create\CommerceCreator;
use Viabo\business\commerce\application\create\CommerceCreatorRequest;


final class CommerceCreatorController extends AbstractController
{

    public function __construct(private readonly CommerceCreator $creator)
    {
    }

    public function __invoke(Request $request): Response
    {
        try {
            $data = $request->toArray();
            $request = new CommerceCreatorRequest(
                $data['name'],
                $data['lastname'],
                $data['phone'],
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