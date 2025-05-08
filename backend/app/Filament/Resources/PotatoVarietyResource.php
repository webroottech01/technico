<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PotatoVarietyResource\Pages;
use App\Filament\Resources\PotatoVarietyResource\RelationManagers;
use App\Models\PotatoVariety;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\ImageColumn;
use Filament\Navigation\NavigationItem;
use Illuminate\Support\Facades\DB;

class PotatoVarietyResource extends Resource
{
    protected static ?string $model = PotatoVariety::class;

    // protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    // protected static ?string $navigationGroup = 'Manage Potato Varieties';
    protected static ?string $navigationLabel = 'Potato Varieties';
    protected static ?string $navigationIcon = 'heroicon-o-archive-box'; 
    
    public static function getNavigationItems(): array
    {
        $categories = DB::table('potato_varieties')
            ->select('category')
            ->distinct()
            ->pluck('category');

        return $categories->map(function ($category) {
            return NavigationItem::make(ucwords(str_replace('_', ' ', $category)))
                ->url(static::getUrl('index') . '?category=' . $category)
                ->group('Manage Potato Varieties')
                ->icon('heroicon-o-rectangle-stack');
        })->toArray();
    }// or another icon


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Select::make('category')
                    ->options([
                        'french_fries' => 'French Fries',
                        'chips' => 'Chips',
                        'tables' => 'Tables',
                    ])
                    ->required(),

                Forms\Components\Repeater::make('features')
                    ->label('Features')
                    ->schema([
                        Forms\Components\TextInput::make('value')
                            ->label('Feature')
                            ->required(),
                    ])
                    ->defaultItems(1)
                    ->minItems(1)
                    ->columns(1)
                    ->cloneable(),

                Forms\Components\FileUpload::make('image')
                    ->image()
                    // ->disk('public')
                    // ->directory('varieties')
                    ->required(),
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                ImageColumn::make('image')
                ->disk('public') // storage/app/public/
                ->circular()
                ->label('Image'),
                Tables\Columns\TextColumn::make('name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('category')->sortable(),
                Tables\Columns\TextColumn::make('features')
                    ->label('Features')
                    // ->formatStateUsing(fn ($state) => implode(', ', $state)),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPotatoVarieties::route('/'),
            'create' => Pages\CreatePotatoVariety::route('/create'),
            'edit' => Pages\EditPotatoVariety::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery();

        if (request()->has('category')) {
            $query->where('category', request('category'));
        }

        return $query;
    }

}
