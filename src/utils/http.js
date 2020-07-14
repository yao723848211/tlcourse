// 在封装接口之前，先封装http的工具类
//封装http的工具，可以帮我们为所有的接口增加一些统一的操作，比如请求头，统一的请求参数，统一的请求错误
//可以使用自己定义配置新建一个axio

import axios from "axios";

const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.status === 200) {
        return response.data
    } else if (response.data.code == 401) {
        //    代表登录过期了
        return  response
    } else {
        return response;
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance