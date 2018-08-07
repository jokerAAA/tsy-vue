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

    tsy-vue是vue版本tsy的实现，api是基于测试环境下tsy小程序来实现。
    主要技术：vue + vue-router + axios + less + mint-ui，部分页面css沿用小程序样式，未使用less

## 项目进度

1. 已完成页面  
    游戏列表+商品列表
2. 待完成页面
    cookie处理
    首页、商品详情、下单、支付、订单列表、订单详情
3. 已知问题  
    开发环境下可能无法使用短信验证、登陆、支付模块，后期会简化处理登陆和支付；
    项目中图片在server端设置了防盗链，无法加载图片