<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\application\create\ConciliationResponse;
use Viabo\management\conciliation\domain\ConciliationReferenceNumber;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\conciliation\domain\exceptions\ConciliationNotExist;

final readonly class ConciliationLeagueDataFinder
{
    public function __construct(private ConciliationRepository $repository)
    {
    }

    public function __invoke(ConciliationReferenceNumber $referenceNumber): ConciliationResponse
    {
        $conciliation = $this->repository->searchReferenceNumber($referenceNumber);

        if (empty($conciliation)) {
            throw new ConciliationNotExist();
        }

        $data = $conciliation->toArray();
        return new ConciliationResponse([
            'spei' => $data['spei'] ,
            'amount' => $data['amountFormat'] ,
            'referenceNumber' => $data['referenceNumber'] ,
            'referencePayCash' => $data['referencePayCash'] ,
            'urlPayCashFormat' => $data['instructionsUrls']['format'] ?? '' ,
            'urlPayCashDownload' => $data['instructionsUrls']['download'] ?? ''
        ]);
    }
}