<template>
 <section id ="screenWrap">
       <h3 class="bigTitle">{{bigTitle}}</h3>
    <div class="screenBox" >
        <ul v-for="list in screenBox" v-scroll="screenMoving">
         <li><a href="#" class="imgBox"><img :src="require(`@/assets/img/${list.img}`)"></a></li>
         <li><span>{{list.name}}</span></li>
         <li><a href="#">{{list.title}}</a></li>
         <li><p>{{list.engTitle}}</p></li>
         <li><p>{{list.director}}</p></li>
         <li><p>{{list.info}}</p></li>
         <li><p>{{list.keyword}}</p></li>
        </ul>
        </div>
            </div>
     </ul>
    </div>
 
 </section>
</template>

<script>

 import axios from 'axios';
 
   export default {
  
  name : "screen",

  data : () => {
  
     return{
      
       bigTitle : "상영중",
       screenBox : []

     
     }
  
  },

  async created() {
  
   const {data} = await axios.get('/vueBiffsite/json/Screen.json');
   this.screenBox = data;

  
   },

 methods : {
 

    
    screenMoving(){
    
     const scrollY = window.scrollY;
     const screenList = document.querySelectorAll(".screenBox ul");
     const screenHeight = 500;
    
    if(scrollY > 50){

     screenList[0].classList.add("active");
     screenList[1].classList.add("active");
     screenList[2].classList.add("active");
    
    }

    if(scrollY > screenHeight){

     screenList[3].classList.add("active");
     screenList[4].classList.add("active");
     screenList[5].classList.add("active");
    
    }

    if(scrollY > screenHeight * 2){

     screenList[6].classList.add("active");
     screenList[7].classList.add("active");
     screenList[8].classList.add("active");
    
    }

    if(scrollY > screenHeight * 3){

     screenList[9].classList.add("active");
     screenList[10].classList.add("active");
     screenList[11].classList.add("active");
    
    }

    if(scrollY > screenHeight * 4){

     screenList[12].classList.add("active");
     screenList[13].classList.add("active");
     screenList[14].classList.add("active");
    
    }

     if(scrollY > screenHeight * 5){
     
     screenList[15].classList.add("active");
     screenList[16].classList.add("active");
     
     }
    
 
  }

  }
  
  
  }

</script>