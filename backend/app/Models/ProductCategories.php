<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategories extends Model
{
    protected $table = "product_categories";

    public function product() {
        return $this->hasMany('App\Models\ProductModel', 'category_id', 'id');
    }

}
