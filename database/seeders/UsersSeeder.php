<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Add images for spaces which have already joined in the network
        DB::table('users')->insert([
            'name' => 'bančni svetovalec',
            'email' => 'bancni@svetovalec.si',
            'password' => Hash::make('sparkasse')
        ]);

    }
}
