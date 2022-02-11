<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    protected $table = "product_models";

    public function product_category(){
        return $this->belongsTo('App\Models\ProductCategories', 'category_id', 'id');
    }

    public function order_detail(){
        return $this->hasMany('App\Models\OrderDetail','product_id', 'id');
    }

    protected $fillable = [
        'title',
        'description',
        'price',
        'amount',
    ];

}
