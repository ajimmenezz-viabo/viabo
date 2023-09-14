<?php declare(strict_types=1);


namespace Viabo\Backend\Controller\management\conciliation;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;
use Viabo\management\conciliation\application\find\ConciliationLeagueDataQuery;
use Viabo\shared\infrastructure\symfony\ApiController;

final readonly class ConciliationViewController extends ApiController
{

    public function __invoke(int $referenceNumber , Request $request , Environment $twig): Response
    {
        try {
            $conciliation = $this->ask(new ConciliationLeagueDataQuery($referenceNumber));
            $html = $twig->render('management/notification/emails/conciliation.spei.html.twig' , $conciliation->data);
            return new Response($html);
        } catch (\DomainException) {
            $html = $twig->render('management/notification/emails/conciliation.not.exist.html.twig');
            return new Response($html);
        }
    }
}