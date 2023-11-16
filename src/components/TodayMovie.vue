<template>
  <div id="movie">
            <div class="wrap">
                <h2>Today's Movie</h2>
                <div class="content">
                    <div v-for="list in movieList" class="box">
                        <div class="movie_item">
                           <img src="../assets/img/play_icon.svg" alt="">
                        </div>
                        <h3>{{list.title}}</h3>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

 export default {
 
  name : "todayMovie",
  data() {

   return{

            movieList : [ 
                
                { title : "한국이 싫어서(Because I Hate Korea , 2023)"},
                { title : "나의 올드 오크(The Old Oak , 2023)"},
                { title : "영화의 황제(The Movie Emperor , 2023)"} 
            
            ]
        }
  
  }
 
 }

</script>