<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [//もう終わってる
                'name' => '飲み物',
                'picture' => 'https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg',
            ],
            [//もう終わってる
                'name' => '祝い事',
                'picture' => 'https://cdn.pixabay.com/photo/2016/10/31/19/04/balloons-1786430_1280.jpg',
            ],
    ]);
    }
}
