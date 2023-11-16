<template>
 <div id="shoot">
        <div class="wrap">
            <div class="title">
                <h2>Out Films Now</h2>
            </div>
        <div class="cont">
            <div class="box" v-for="list in shoot">
            <img :src="require(`@/assets/img/${list.img}`)">
                <div class="txt_part">
                    <p>{{list.title}}</p>
                    <a href="">{{list.name}}</a>
                </div>
        </div>
    </div>

    <div class="more_btn">
        <a href="">더보기</a>
    </div>
    </div>
       </div>
</template>

<script>

 export default {
 
  name : "films",
  data(){
  
   return {

            shoot : [

                {img : "shoot1.png" , name : "고레에다 히로카즈" , title : "괴물(Monster)"},
                {img : "shoot2.png" , name : "한슈아이" ,  title : "녹야(Green Night)"},
                {img : "shoot3.png" , name : "베르트랑 보넬로" ,  title : "더 비스트(The Beast)"},
                {img : "shoot4.png" , name : "이충현" ,  title : "발레리나(Ballerina)"},
                {img : "shoot5.png" , name : "민용근" ,  title : "소울메이트(Soulmate)"},
                {img : "shoot6.png" , name : "도다 아키히로" ,  title : "이치코(Ichiko)"},
            ]
        }
  
  }
 
 
 }

</script>