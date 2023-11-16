import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/biff',
    name: 'biff',
    component: function () {
      return import('../views/HistoryView.vue')
    }
  },
  {
    path: '/biffInfo',
    name: 'biffInfo',
    component: function () {
      return import('../views/BiffInfoView.vue')
    }
  },
  {
    path: '/screen',
    name: 'screen',
    component: function () {
      return import('../views/ScreenView.vue')
    }
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : routes
})

export default router
