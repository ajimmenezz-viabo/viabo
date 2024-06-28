<?php declare(strict_types=1);

namespace Viabo\Backend\Controller\stp\users\find;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Viabo\backoffice\projection\application\find_company_by_user\CompanyQueryByUser;
use Viabo\backoffice\projection\application\find_company_service\CompanyServiceQuery;
use Viabo\shared\infrastructure\symfony\ApiController;
use Viabo\stp\cardCloud\application\find_card_details\CardCloudCardDetailsQuery;
use Viabo\stp\users\application\find_user_cards\UserCardsCloudQuery;


final readonly class CardsCloudUserFinderController extends ApiController
{

    public function __invoke(Request $request): Response
    {
        try {
            $tokenData = $this->decode($request->headers->get('Authorization'));
            $businessId = $tokenData['businessId'];
            $userId = $tokenData['id'];
            $cardCloudServiceId = '5';
            $user = ['ownerId' => $userId, 'name' => $tokenData['name']];

            $company = $this->ask(new CompanyQueryByUser($userId, $businessId, $tokenData['profileId']));
            $service = $this->ask(new CompanyServiceQuery($company->data['id'], $cardCloudServiceId));
            $cards = $this->ask(new UserCardsCloudQuery($userId));
            $cards = array_map(function (string $cardId) use ($businessId, $user, $service) {
                $card = $this->ask(new CardCloudCardDetailsQuery($businessId, $cardId, $user));
                $data = $card->data;
                $data['subAccountId'] = $service->data['subAccountId'];
                $data['companyId'] = $service->data['subAccountId'];
                return $data;
            }, $cards->data);

            return new JsonResponse($cards);
        } catch (\DomainException $exception) {
            return new JsonResponse($exception->getMessage(), $exception->getCode());
        }
    }
}