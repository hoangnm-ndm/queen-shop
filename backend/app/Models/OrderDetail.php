<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $table = "order_details";

    public function product(){
        return $this->belongsTo('App\Models\ProductModels', 'product_id', 'id');
    }

    public function order(){
        return $this->belongsTo('App\Models\Order', 'order_id', 'id');
    }
}
