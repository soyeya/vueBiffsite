<template>
  <div id="review">
    <div class="dark">
        <div class="wrap">
            <div class="title">
                <h2>Biff Story</h2>
            </div>
            <div class="slider_cover">
                <div class="slider">
                    <div v-for="list in reviews" class="slide" :id="list.id">
                        <p>{{list.retxt}}</p>
                        <div class="img"><img :src="require(`@/assets/img/${list.img}`)"></div>
                        <span>{{list.name}}</span>
                    </div>

                </div>
            </div>
            <div class="pager">
                <ol>
                    <li class="active" rel="0" @click="reviewSwipe1"></li>
                    <li rel="1" @click="reviewSwipe2"></li>
                    <li rel="2" @click="reviewSwipe3"></li>
                </ol>
            </div>
        </div>
    </div>
        </div>

</template>

<script>

 export default{
  
  name : "review",
  data(){
  
   return{

        reviews : [

            {
                img : "review01.png",
                retxt : `운명의 힘, 거스를 수 없다. <강변의 착오>(웨이슈준, 101m)는 중국의 소설가 위화의 단편 소설을 영화한 작품이다. 
                오프닝 시퀀스의 첫머리에 알베르 카뮈의 운명에 관한 말이 소개된다. 
                운명은 그 정체를 알 수 없기 때문에 내가 신의 가면을 쓰고 운명이 되겠다는 그런 말이다. 그리스 고전 비극을 관통하는 주제 역시 운명이다. `,
                name : "김문홍",
                id : "firstPage"
                    },

            {
                img : "review02.png",
                retxt : "점차 원자화가 가속화되는 세계에서도 노장은 환대와 연대를 촉구했다. <나의 올드 오크>는 타인의 고통에 공감하기조차 각박할 정도로 살기 어려운 세상에서 어떻게든 연대를 이어 나가려는 사람들의 이야기다.집값은 점점 떨어지고 희망은 보이지 않는 영국의 폐광촌에 전쟁을 피해 온 시리아의 난민들이 나타난다. 난민들은 환대받지 못한다. 하루하루 살아가기도 팍팍한 마을 사람들에게 그들은 불청객에 불과하다. 반면 주인공 밸런타인은 이들과 달리 난민들에게 자리를 내어주고 돕는다. 난민 소녀 야라의 카메라를 고쳐준 것을 계기로 그는 시리아인들과 우정을 쌓는다. 그러나 새로운 우정을 얻음과 동시에 과거의 우정에는 금이 가기 시작한다.",
            
                name : "오민석",
                id : "secondPage"

                    },

            {
                img : "review03.png",
                retxt : "작지만 큰 영화들이 있습니다. 유명한 감독이 연출했다거나 유명 배우가 출연하지도 않은 영화. 거창한 스토리라인이나 기억할 만한 명대사가 있는 것도 아닌데 자꾸만 생각나는 그런 영화. 보고 나면 그날은 아무하고도 얘기하고 싶지 않고 비밀처럼 혼자 간직하고 싶어지는 그런 영화 말입니다.벨기에 바스 데보스 감독의 네 번째 장편 <히어>가 바로 그런 영화입니다. 한 남자와 한 여자가 여자의 고모가 경영하는 중국 식당에서 스치듯 만나고, 숲에서 한 번 더 우연히 만나 얘기를 나누다가 헤어집니다. 단지 그 뿐입니다. 게다가 <히어>는 보고 나면 세상은 그래도 살 만하다고 여겨지게 만드는 작품입니다.",
                name : "서승희",
                id : "thirdPage"

                    }
        ],

         sliderWidth : 0

        }

        },
      
      methods : {

        reviewSwipe1(e){
        
          const slider  = document.querySelector(".slider");
          var firstPage = document.querySelector("#firstPage");
          const siblingSecond = e.target.parentElement.children[1];
          const siblingThird = e.target.parentElement.children[2];
          
          e.target.classList.add("active");
          siblingSecond.classList.remove("active");
          siblingThird.classList.remove("active");
        
            slider.prepend(firstPage);

        
        },
        reviewSwipe2(e){
        
          const slider  = document.querySelector(".slider");
          var secondPage = document.querySelector("#secondPage");
          const siblingFirst = e.target.parentElement.children[0];
          const siblingThird = e.target.parentElement.children[2];
          
          e.target.classList.add("active");
          siblingFirst.classList.remove("active");
          siblingThird.classList.remove("active");

        
            slider.prepend(secondPage);
          
          
        
        },
        reviewSwipe3(e){
        
          const slider  = document.querySelector(".slider");
          var thirdPage = document.querySelector("#thirdPage");
          const siblingFirst = e.target.parentElement.children[0];
          const siblingSecond = e.target.parentElement.children[1];
          e.target.classList.add("active");
          siblingFirst.classList.remove("active");
          siblingSecond.classList.remove("active");

          slider.prepend(thirdPage);
          
        
        },
        
        
      }
  
 
 
 }


</script>