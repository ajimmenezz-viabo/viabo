<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\find;


use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\business\commerce\domain\exceptions\CommerceNotExist;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;

final readonly class CommerceFinder
{
    public function __construct(private CommerceRepository $repository)
    {
    }

    public function __invoke(CommerceLegalRepresentative $legalRepresentative): CommerceResponse
    {
        $commerce = $this->repository->searchBy($legalRepresentative);

        if (empty($commerce)) {
            throw new CommerceNotExist();
        }

        $commerce = array_map(function (array $commerce) {
            $commerce['Services'] = empty($commerce['Services']) ? [] : json_decode("[{$commerce['Services']}]");
            unset($commerce['Active']);
            return $commerce;
        } , $commerce);

        return new CommerceResponse($commerce[0]);
    }
}