<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $appends = ['selling_price'];

    public function getSellingPriceAttribute(){
        $vat = (float)$this->attributes['tax_amount'];
       
        return number_format((float)$this->attributes['price'] + $vat, 2, '.', ',');
    }

    public function getImageNameAttribute($value){
        if(!is_null($value)) return 'images/'. $value;
        return $value;
    }

    public function getPriceAttribute($value){   
        return number_format((float)$value, 2, '.', ',');
    }
    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }    
}
