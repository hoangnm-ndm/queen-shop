<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = "orders";

    public function order_detail(){
        return $this->hasMany('App\Models\OrderDetail', 'order_id', 'id');
    }

    public function order(){
        return $this->belongsTo('App\Models\Customer', 'customer_id', 'id');
    }
}
