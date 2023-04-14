<?php declare(strict_types=1);


namespace Viabo\security\module\domain;


final readonly class ModuleView
{
    public function __construct(
        private string  $id ,
        private string  $categoryId ,
        private string  $categoryName ,
        private string  $categoryOrder ,
        private string  $moduleOrder ,
        private string  $moduleName ,
        private string  $path ,
        private string  $icon ,
        private ?string $moduleActions ,
        private string  $active
    )
    {
    }

    public function category(): string
    {
        return $this->categoryName;
    }

    public function toArray(): array
    {
        return [
            'categoryName' => $this->categoryName ,
            'name' => $this->moduleName ,
            'path' => $this->path ,
            'icon' => $this->icon
        ];
    }
}