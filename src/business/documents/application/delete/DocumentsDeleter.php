<?php declare(strict_types=1);


namespace Viabo\business\documents\application\delete;


use Viabo\business\documents\domain\DocumentName;
use Viabo\business\documents\domain\DocumentRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\aggregate\AggregateRoot;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final class DocumentsDeleter extends AggregateRoot
{
    public function __construct(private readonly DocumentRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(
        CommerceLegalRepresentative $legalRepresentative ,
        CommerceId                  $commerceId ,
        array                       $uploadDocuments
    ): void
    {
        foreach ($uploadDocuments as $documentName => $uploadDocument) {
            $filters = Filters::fromValues([
                ['field' => 'commerceId', 'operator'=> '=', 'value' => $commerceId->value() ],
                ['field' => 'name.value', 'operator'=> '=', 'value' => $documentName ]
            ]);

            $document = $this->repository->searchCriteria(new Criteria($filters));

            if(empty($document)){
                continue;
            }

            $document[0]->setEventDelete($legalRepresentative);

            $this->repository->delete($document[0]);

            $this->bus->publish(...$document[0]->pullDomainEvents());
        }
    }
}