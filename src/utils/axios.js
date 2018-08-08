import {
  baseUrl
} from './env';

import axios from "axios";
import {
  Indicator
} from 'mint-ui';
import {
  Toast
} from 'mint-ui';
import router from '@/router';


axios.interceptors.request.use(config => {
	Indicator.open();
	/* 处理cookie */
	let cookie = localStorage.getItem('cookie');
	if(!cookie) {
		return config ;
	}
	cookie = JSON.parse(cookie);
	let str = '';
	if (cookie) {
		for (var key in cookie) {
			str += `${key}=${cookie[key]}; `
		};
		str = str.slice(0, -1);
	}
	let header = {
		cookie : str 
	};
	header = Object.assign({},header,config.header);
	const obj = Object.assign({}, config, {
		header: header
	});
	return obj
}, error => {
	Indicator.close();
	Toast('加载超时');
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading
	Indicator.close();
	/* 处理cookie */
	if(!res) return ;
	let cookieNew = res.data.manualCookie;
	let cookie = localStorage.getItem('cookie');
	if(cookie) cookie = JSON.parse(cookie);
	if (cookieNew && cookie) {
		cookieNew = Object.assign({}, cookie, cookieNew);
	};
	cookieNew = JSON.stringify(cookieNew);
	localStorage.setItem('cookie', cookieNew);

	if (res.data.errcode == 0) {
		return res;
	} else if (res.data.errcode == 100001) {
		let currentUrl = router.history.current.fullPath;
		localStorage.setItem('loginReturnUrl',currentUrl);
		location.href = '/#/user/login';
		// router.options.routes.push('/user/login');
	} else {
		Toast(res.data.msg);
	}

}, error => {
	Indicator.close();
	Toast('请求失败');
	return Promise.reject(error)
})

export default axios;
