<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $questions = [
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2014/04/26/04/25/woman-332278_960_720.jpg',
                'english_word' => 'happy',
                'myanmar_word' => 'ပျော်ရွှင်သော',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_960_720.jpg',
                'english_word' => 'love',
                'myanmar_word' => 'အချစ်',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_960_720.jpg',
                'english_word' => 'friend',
                'myanmar_word' => 'သူငယ်ချင်း',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg',
                'english_word' => 'explosion',
                'myanmar_word' => 'ပေါက်ကွဲခြင်း',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394__340.jpg',
                'english_word' => 'carrot',
                'myanmar_word' => 'မုန်လာဥနီ',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800__340.jpg',
                'english_word' => 'car',
                'myanmar_word' => 'ကား',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2010/12/06/22/soldiers-1002__340.jpg',
                'english_word' => 'soldier',
                'myanmar_word' => 'စစ်သား',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724__340.jpg',
                'english_word' => 'fear',
                'myanmar_word' => 'ကြောက်ရွံခြင်း',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481__340.jpg',
                'english_word' => 'money',
                'myanmar_word' => 'ပိုက်ဆံ',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg',
                'english_word' => 'book',
                'myanmar_word' => 'စာအုပ်',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015__340.jpg',
                'english_word' => 'Earth',
                'myanmar_word' => 'ကမ္ဘာ',
            ],
            [
                'image_url' => 'https://cdn.pixabay.com/photo/2019/10/03/09/39/traffic-4522805__340.jpg',
                'english_word' => 'traffic jam',
                'myanmar_word' => 'ကားပိတ်ခြင်း',
            ],
        ];

        // Truncate Table
        DB::table('questions')->truncate();

        foreach ($questions as $question) {
            DB::table('questions')->insert([
                'image_url' => $question['image_url'],
                'english_word' => $question['english_word'],
                'myanmar_word' => $question['myanmar_word'],
                'created_at' =>  Carbon::now(),
                'updated_at' =>  Carbon::now(),
            ]);
        }
    }
}
