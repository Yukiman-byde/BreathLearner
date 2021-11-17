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
                'name' => 'ダンス',
                'picture' => 'https://cdn.pixabay.com/photo/2017/11/11/21/55/freedom-2940655_1280.jpg',
            ],
    ]);
    }
}
