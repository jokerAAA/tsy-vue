import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/Index'
import Gamelist from '@/page/gamelist';
import Goodslist from '@/page/goodslist';
import Goodsdetail from '@/page/goodsdetail'

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
    },
    {
      path:'/goods/list',
      component:Goodslist
    },
    {
      path:'/goods/detail',
      component:Goodsdetail
    }
  ]
})
