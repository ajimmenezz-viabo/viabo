<?php
namespace Viabo\Backend\Controller\business\commerce;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


final class CommerceCreatorController extends AbstractController
{
    public function __invoke(Request $request): Response
    {
        return $this->render('index.html.twig');
    }
}