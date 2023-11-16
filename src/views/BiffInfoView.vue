<template>
<section id="biff2023Wrap">
 <div class="boxIndex">
   <h3 class="bigTitle">{{bigTitle}}</h3>
   <div class="indexForm">
   <form class="indexForm">
    <ul>
     <li v-for="list in formInfo"><h3>{{list.title}}</h3><p>{{list.boldText}}<span>{{list.subInfo}}</span></p></li>
    </ul>
   </form>
   </div>
 </div>

  <div class="thisyearBox">
   <h3 class="bigTitle">{{subTitle}}</h3>
   <div class="yearBox">
    <ul>
     <li v-for="list in yearBox">
     <h3>{{list.title}}</h3>
     <p>{{list.info}}</p>
     </li>
    </ul>
   </div>
  </div>
  <div class="busanText">
   <p>{{festival}}</p>
    <ul>
        <li v-for="list in festivalInfo "><a :href="list.href" target="blank"><img :src="require(`@/assets/img/${list.img}`)"></a></li>
    </ul>
  </div>
</section>

</template>

<script>

import axios from 'axios';


 export default{
  
   name : "biffInfo",
   data(){
   
    return {

    bigTitle : "개요 및 특징",
    subTitle : "올해의 특징",
    festival : "BUSAN International Film Festival",
    yearBox : [],
    formInfo : [
     
     { title : "개최기간" , subInfo : "2023년 10월 4일(수) ~ 13일(금)" },
     { title : "상영관" , boldText : "4개 극장 25개 스크린" , subInfo : "영화의전당, CGV센텀시티, 롯데시네마 센텀시티, 롯데시네마 대영(커뮤니티비프)" },
     { title : "상영작" , boldText : "총 269편 공식 초청작 69개국 209편", subInfo : " 월드 + 인터내셔널 프리미어 87편 | 월드 프리미어 80편 | 인터내셔널 프리미어 7편" },
     { title : "프로그램 주요행사" , subInfo : " 오픈 토크 | 액터하우스 | 스페셜 토크 | 마스터 클래스 | 야외무대인사 | 핸드 프린팅 " }
    
    ],

    festivalInfo : [
     

      { href : "https://twitter.com/busanfilmfest" , img : "twitter.svg" },
      { href : "https://www.instagram.com/busanfilmfest/" , img : "insta.svg" },
      { href : "https://www.facebook.com/busanfilmfest" , img : "facebook.svg" },
      { href : "https://www.youtube.com/channel/UCJB3MxLQsak5tT-Yvod2alA" , img : "youtube.svg" }
      
      ]
   
    }
   },

   async created() {

    const {data} = await axios.get('/vueBiffsite/json/BiffInfo.json');
    this.yearBox = data;
    console.log(this.yearBox);


   }



 
 
 }




</script>