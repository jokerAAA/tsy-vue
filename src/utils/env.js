/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';
let passportUrl = '';


if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://cdt0-wxmn.taoshouyou.com' ;
	imgBaseUrl = 'http://img-test.taoshouyou.com' ;
	passportUrl = 'http://cdt0-passport.taoshouyou.com' ;
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}