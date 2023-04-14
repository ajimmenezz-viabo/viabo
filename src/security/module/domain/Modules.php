<?php declare(strict_types=1);


namespace Viabo\security\module\domain;


use Viabo\shared\domain\Utils;
use Viabo\shared\domain\utils\Collection;

final class Modules extends Collection
{
    public function __construct(array $modules)
    {
        parent::__construct($modules);
    }

    public function toArrayByCategory(): array
    {
        $categories = $this->modulesCategories();
        $modules = $this->modulesSortedByCategories($categories);
        return ['menu' => $modules];
    }

    public function toArray(): array
    {
        return array_map(function (ModuleView $module) {
            return $module->toArray();
        } , $this->getCollection());
    }

    private function modulesCategories(): array
    {
        return Utils::removeDuplicateElements(array_map(function (ModuleView $module) {
            return $module->category();
        } , $this->getCollection()));
    }

    private function modulesSortedByCategories(array $categories): array
    {
        $modulesCategory = [];
        foreach ($categories as $category) {
            $modulesCategory[] = ['category' => $category , 'modules' => $this->filterModulesBy($category)];
        }
        return $modulesCategory;
    }

    private function filterModulesBy(string $category): array
    {
        $modules = [];
        foreach ($this->toArray() as $module) {
            if ($category === $module['categoryName']) {
                unset($module['categoryName']);
                $modules[] = $module;
            }
        }
        return $modules;
    }
}