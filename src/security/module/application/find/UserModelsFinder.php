<?php declare(strict_types=1);


namespace Viabo\security\module\application\find;


use Viabo\security\module\domain\exceptions\UserModuleEmpty;
use Viabo\security\module\domain\ModulePermission;
use Viabo\security\module\domain\ModuleRepository;
use Viabo\security\module\domain\Modules;

final readonly class UserModelsFinder
{
    public function __construct(private ModuleRepository $repository)
    {
    }

    public function __invoke(array $userPermissions): UserModelsResponse
    {
        $moduleViews = $this->repository->searchBy(new ModulePermission($userPermissions['permissionModules']));
        if (empty($moduleViews)) {
            throw new UserModuleEmpty();
        }
        $modules = new Modules($moduleViews);
        $userModules = array_merge(
            $modules->toArrayByCategory(), ['userActions' => $userPermissions['actionsModules']]
        );
        return new UserModelsResponse($userModules);
    }
}
