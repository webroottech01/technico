<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('potato_varieties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category'); // french_fries, chips, tables, etc.
            $table->json('features');
            $table->string('image')->nullable(); // image path
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('potato_varieties');
    }
};
