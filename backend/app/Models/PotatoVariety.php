<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PotatoVariety extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'category', 'features', 'image'];

    protected $casts = [
        'features' => 'array',
    ];
}
