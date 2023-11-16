<template>
  <div id="app">
  <header>
      <div class="logo">
          <router-link to="/"><img src="./assets/img/logo.svg" alt=""></router-link>
      </div>
      <div class="menu">
          <ul>
              <li v-for="list in menuList"><router-link :to="list.href">{{list.name}}</router-link></li>
          </ul>
      </div>
      <div class="mypage">
          <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
          </ul>
      </div>
  </header>
  <router-view />
  <Footer />
  </div>
</template>

<style>

@import url(./css/common.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>


<script>

import History from './views/HistoryView.vue';
import BiffInfo from './views/BiffInfoView.vue';
import Home from './views/MainView.vue';
import Screen from './views/ScreenView.vue';
import Footer from './views/FooterView.vue';


export default {

 name : "App",
 components : {
 
    Home,
    History,
    BiffInfo,
    Screen,
    Footer
 
  },

  data : () => {

        return{

        menuList : [

           { name : "biff" , href : "/biff" },
           { name : "2023Biff" , href : "/biffInfo"},
           { name : "screen" , href : "/screen"}

        ]

        }

      }

}

</script>
