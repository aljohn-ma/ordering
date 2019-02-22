<?php

use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $tbl = 'items';

    public function run()
    {
        DB::table($this->tbl)->delete();

        $apps = array(
            array('id' => 1, 'item_name' => 'Burger', 'description' => 'Regular Burger', 'category_id'=> 1,'price' => 39,'tax_amount' => 2, 'image_name' => 'b.png'),
            array('id' => 2, 'item_name' => 'Egg Burger', 'description' => 'Burger with egg', 'category_id'=> 1,'price' => 40,'tax_amount' => 3, 'image_name' => 'bwe.png'),
            array('id' => 3, 'item_name' => 'Cheese Burger', 'description' => 'Burger with cheese', 'category_id'=> 1,'price' => 50,'tax_amount' => 5, 'image_name' => 'bwc.png'),
            array('id' => 4, 'item_name' => 'Fries', 'description' => 'Fries', 'category_id'=> 1,'price' => 30,'tax_amount' => 5, 'image_name' => 'fr.png'),
            array('id' => 5, 'item_name' => 'Hotdog', 'description' => 'Hotdog', 'category_id'=> 1,'price' => 20,'tax_amount' => 5, 'image_name' => 'hd.png'),

            array('id' => 6, 'item_name' => 'Coke', 'description' => '12 oz.', 'category_id'=> 2,'price' => 20,'tax_amount' => 2, 'image_name' => 'coke.png'),
            array('id' => 7, 'item_name' => 'Sprite', 'description' => '12 oz.', 'category_id'=> 2,'price' => 20,'tax_amount' => 3, 'image_name' => 'sprite.png'),
            array('id' => 8, 'item_name' => 'Tea', 'description' => '12 oz.', 'category_id'=> 2,'price' => 20,'tax_amount' => 5, 'image_name' => 'tea.png'),

            array('id' => 9, 'item_name' => 'CB1', 'description' => 'Chicken combo', 'category_id'=> 3,'price' => 60,'tax_amount' => 5, 'image_name' => 'cb1.png'),
            array('id' => 10, 'item_name' => 'CB2', 'description' => 'Pork combo', 'category_id'=> 3,'price' => 45,'tax_amount' => 4, 'image_name' => 'cb2.png'),
            array('id' => 11, 'item_name' => 'CB3', 'description' => 'Fish combo', 'category_id'=> 3,'price' => 50,'tax_amount' => 3, 'image_name' => 'cb3.png'),

        );

        DB::table($this->tbl)->insert($apps);
    }
}
