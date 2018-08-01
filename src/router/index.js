import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/Index'
import Gamelist from '@/page/gamelist';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/game/list',
      component:Gamelist
    }
  ]
})
