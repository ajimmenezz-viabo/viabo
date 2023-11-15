<?php declare(strict_types=1);


namespace Viabo\business\documents\application\find;


use Viabo\business\documents\domain\Document;
use Viabo\business\documents\domain\DocumentRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final class DocumentsFinder
{

    public function __construct(private DocumentRepository $repository)
    {
    }

    public function __invoke(CommerceId $commerceId): DocumentsResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value() ]
        ]);
        $documents = $this->repository->searchCriteria(new Criteria($filters));
        return new DocumentsResponse(array_map(function (Document $document){
            return $document->toArray();
        }, $documents));
    }


}