<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PotatoVariety;
use Illuminate\Http\Request;

class PotatoVarietyController extends Controller
{
    public function getByCategory($category)
    {
        $varieties = PotatoVariety::where('category', $category)->get();

        return response()->json([
            'category' => $category,
            'data' => $varieties->map(function ($variety) {
                return [
                    'id' => $variety->id,
                    'name' => $variety->name,
                    'image' => $variety->image ? url('/storage/' . $variety->image) : null,
                    'features' => $variety->features,
                ];
            }),
        ]);
    }
}
