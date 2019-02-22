<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderedItem extends Model
{
    protected $fillable = ['order_id',
        'item_id',
        'item_name',
        'description',
        'category_id',
        'price',
        'tax_amount',
        'quantity',
        'image_name'];
}
