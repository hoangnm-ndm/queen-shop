<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_models', function (Blueprint $table) {
            $table->increments('id'); // cột id có kiểu là interger và tự động tăng
            $table->tinyInteger('status')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->float('price')->nullable();
            $table->float('discount')->nullable();
            $table->float('newprice')->nullable();
            $table->integer('amount')->nullable();
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();
            $table->string('image3')->nullable();
            $table->string('image4')->nullable();
            $table->string('image5')->nullable();
            $table->tinyInteger('category_id')->nullable();
            $table->tinyInteger('tag_id')->nullable();
            $table->tinyInteger('size_id')->nullable();
            $table->tinyInteger('color_id')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_models');
    }
}
