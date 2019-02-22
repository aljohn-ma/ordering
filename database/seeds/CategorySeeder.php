<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $tbl = 'categories';

    public function run()
    {
        DB::table($this->tbl)->delete();

        $apps = array(
            array('id' => 1, 'name' => 'Burgers', 'description' => ''),
            array('id' => 2, 'name' => 'Beverages', 'description' => ''),
            array('id' => 3, 'name' => 'Combo meals', 'description' => ''),

        );

        DB::table($this->tbl)->insert($apps);
    }
}
