<?php

use Illuminate\Database\Seeder;

class VouchersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $tbl = 'vouchers';

    public function run()
    {
        DB::table($this->tbl)->delete();

        $apps = array(
            array('id' => 1, 'code' => '9JNP7', 'expiration_date' => '2019-2-28 00:00:00'),
            array('id' => 2, 'code' => '22rEZ', 'expiration_date' => '2019-2-15 00:00:00'),
            array('id' => 3, 'code' => '5L7nh', 'expiration_date' => '2019-3-01 00:00:00'),

        );

        DB::table($this->tbl)->insert($apps);
    }
}
