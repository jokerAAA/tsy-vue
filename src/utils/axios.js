import {
	baseUrl
} from './env';

import axios from "axios";
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';

axios.interceptors.request.use(config => {
    Indicator.open();
    return config
  }, error => {
	Indicator.close();
	Toast('加载超时');
    return Promise.reject(error)
  })
  // http响应拦截器
  axios.interceptors.response.use(data => {// 响应成功关闭loading
    Indicator.close();
    return data
  }, error => {
    Indicator.close();
	Toast('请求失败');
    return Promise.reject(error)
  })

export default axios ;

