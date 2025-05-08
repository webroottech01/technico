<?php

namespace App\Filament\Resources\PotatoVarietyResource\Pages;

use App\Filament\Resources\PotatoVarietyResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPotatoVariety extends EditRecord
{
    protected static string $resource = PotatoVarietyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
