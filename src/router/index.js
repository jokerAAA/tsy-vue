import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/Index'
import Gamelist from '@/page/gamelist';
import Goodslist from '@/page/goodslist';
import Goodsdetail from '@/page/goodsdetail';
import Orderconfirm from '@/page/order/confirm';
import Login from '@/page/user/login';

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
    },
    {
      path:'/user/login',
      component:Login
    },
    {
      path:'/order/confirm',
      component:Orderconfirm
    },
  ]
})
