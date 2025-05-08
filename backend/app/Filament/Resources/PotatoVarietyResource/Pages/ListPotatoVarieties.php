<?php

namespace App\Filament\Resources\PotatoVarietyResource\Pages;

use App\Filament\Resources\PotatoVarietyResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListPotatoVarieties extends ListRecords
{
    protected static string $resource = PotatoVarietyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
