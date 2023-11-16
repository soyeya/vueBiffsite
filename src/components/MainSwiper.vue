<template>
<section id="main">
 <swiper 
    class="swiper-wrapper" :options="swiperOption">
      <swiper-slide class="slides slide1"></swiper-slide>
      <swiper-slide class="slides slide2"></swiper-slide>
      <swiper-slide class="slides slide3"></swiper-slide>
      <swiper-slide class="slides slide4"></swiper-slide>
  </swiper>
   <div class="slideText">
            <div class="text_part">
                <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                <router-link to="/screen"><a href="#">상영작 보러가기</a></router-link to="/">
            </div>
        </div>
 </section>

</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import '../swiper/swiper.css';

 export default{
  
   name : "mainSwiper",
   components : {
   
      Swiper,
      SwiperSlide

   
    },
   data(){

    return{

      swiperOption : {
      
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          slidesPerGroup: 1,
          
          autoplay : {

           delay : 2500

           },

          parallax: true,
          speed: 600

      }

    }
     
   }
   
 }

</script>