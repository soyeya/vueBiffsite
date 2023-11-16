<template>
<div id="mainCotent">
 <mainSwiper />
 <todayMovie />
 <div class="banner_middle">
    <div class="wrap">
        <div class="txt_part">
            <a href="#">제 28회 부산 국제 영화제 수상작 및 수상자</a>
        </div>
    </div>
</div>
<Films />
<Review />

</div>

</template>


<script>

import mainSwiper from '@/components/MainSwiper.vue';
import todayMovie from '@/components/TodayMovie.vue';
import Films from '@/components/Films.vue';
import Review from '@/components/Review.vue';

    
 export default {
 
  name : "home",

   components : {
    
     mainSwiper,
     todayMovie,
     Films,
     Review

    },

    data : () => {

        return{

          slide_img : [

                "poster03.png" ,
                "poster04.png" ,
                "poster05.png" ,
                "poster01.png" ,
    
            ]

        }

    }

 
 }


</script>