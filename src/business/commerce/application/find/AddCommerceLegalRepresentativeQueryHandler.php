<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Psr\Log\LoggerInterface;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class AddCommerceLegalRepresentativeQueryHandler implements QueryHandler
{
    public function __construct(private CommerceFinder $finder , private LoggerInterface $notificationsLogger)
    {
    }

    public function __invoke(AddCommerceLegalRepresentativeQuery $query): Response
    {
        return new CommerceResponse(array_map(function (array $card) {
            $commerce = $this->commerceFinder($card['commerceId']);
            $card['ownerId'] = empty($commerce) ? '' : $commerce['legalRepresentative'];
            return $card;
        } , $query->cards));
    }

    private function commerceFinder(string $commerceId): array|null
    {
        try {
            $commerceId = CommerceId::create($commerceId);
            $commerce = $this->finder->__invoke($commerceId);
            return $commerce->data;
        } catch (\DomainException $exception) {
            $this->notificationsLogger->error(
                $exception->getMessage() ,
                ['commerceId' => $commerceId , 'file' => $exception->getFile()]
            );
            return null;
        }
    }
}