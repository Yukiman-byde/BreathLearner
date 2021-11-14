<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
           //UsersTableSeeder::class,
           CategorySeeder::class,
           //TipSeeder::class,
           //TranscriptionSeeder::class,
           //DisplaySeeder::class,
        ]);
    }
}
