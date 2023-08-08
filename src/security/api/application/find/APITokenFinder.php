<?php declare(strict_types=1);


namespace Viabo\security\api\application\find;


use Viabo\security\api\domain\APIRepository;
use Viabo\security\api\domain\APIToken;
use Viabo\security\api\domain\exceptions\APINotAuthorized;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class APITokenFinder
{
    public function __construct(private APIRepository $repository)
    {
    }

    public function __invoke(APIToken $token): void
    {
        $filter = Filters::fromValues([
            ['field' => 'token.value' , 'operator' => '=' , 'value' => $token->value()] ,
            ['field' => 'active.value' , 'operator' => '=' , 'value' => '1']
        ]);

        $api = $this->repository->searchCriteria(new Criteria($filter));

        if (empty($api)) {
            throw new APINotAuthorized();
        }
    }
}