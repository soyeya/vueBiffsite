<template>
 <section id="historyBiff">
  <h3 class="biffTitle">{{bigTitle}}</h3>
  <div class="historyWrap" v-for="list in biffBox">
    <div class="introBox"><img :src="require(`@/assets/img/${list.img}`)" v-scroll="biffMoving"></div>
    <h3>{{list.title}}</h3>
    <p>{{list.text}}</p>
    <p>{{list.subtext}}</p>
    <p>{{list.lasttext}}</p>
  </div>
  <div class="recordBox">
    <ul>
      <li v-for="list in recordText"><img src="../assets/img/biffLeft.png"><p>{{list.name}}</p><img src="../assets/img/biffRight.png"></li>
    </ul>
  </div>
 </section>

</template>

<script>
 
 import axios from 'axios';

 export default {
 
  name : "biff",

  data() {
  
   return {

    bigTitle : "BIFF 소개",
    biffBox : [],
    recordText : [
     
      { name : "유네스코 펠리니메달 수상(2007) 칸영화제에 이어 두번째 수상" },
      { name : "BIFF 전용관 ‘영화의전당’ 빅루프 세계기네스 등재(2011)" },
      { name : "아시아 최초 유네스코 영화 창의도시 선정 (2014)" },
      { name : "[美 TIME 誌 선정] 아시아 최고의 영화제로 세계 5대 영화제 진입 (2017)"}
       
     ]

   }

  },

  
  async created(){
     
    const {data} = await axios.get('/vueBiffsite/json/History.json');
    this.biffBox = data;
  
  },


  methods : {
  
    biffMoving(){

     const ImageOpacity = document.querySelectorAll (".introBox img");
     const scrollY = window.scrollY;
     const BoxHeight = 530;

     if(scrollY >  50){

      ImageOpacity[0].classList.add("active");

     }else{ ImageOpacity[0].classList.remove("active"); }

     if(scrollY >  BoxHeight){
     
      ImageOpacity[1].classList.add("active");

      }else{ ImageOpacity[1].classList.remove("active"); }

     if(scrollY >  BoxHeight * 2){
     
      ImageOpacity[2].classList.add("active");

      }else{ ImageOpacity[2].classList.remove("active"); }

     if(scrollY >  BoxHeight * 3){
     
      ImageOpacity[3].classList.add("active");

      }else{ ImageOpacity[3].classList.remove("active"); }

     }
  
   }
 
 
 }


</script>