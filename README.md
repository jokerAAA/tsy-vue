# tsy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目介绍

    tsy-vue是vue版本tsy的实现，api是基于测试环境下tsy小程序来实现
    主要技术：vue + vue-router + axios + less + mint-ui，部分页面css沿用小程序样式，未使用less

## 项目进度

1. 已完成页面  
    首页 + 游戏列表 + 商品列表 + 商品详情
    cookie处理
    下单
2. 待完成页面
    登陆、支付、订单列表、订单详情
3. 已知问题和功能调整
    开发环境下可能无法使用短信验证、登陆、支付模块,现在无法进入下单页、订单页等；
    项目中图片在server端设置了防盗链，无法加载图片，首页、商品详情页轮播图暂时不做  
    游戏列表删除游戏搜索功能
    商品列表删除商家筛选项
    商品详情页暂不处理联系客服和分享功能
    下单页删除客服功能
    