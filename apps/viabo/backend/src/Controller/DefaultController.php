<?php
namespace Viabo\Backend\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


final class DefaultController extends AbstractController
{
    public function __invoke(Request $request): Response
    {
        return $this->render('index.html.twig');
    }
}