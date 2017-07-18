import 'babel-polyfill';
import  axios from 'axios';
// import Vue from 'vue';
//服务器端渲染会异常 没有document
// require('nprogress/nprogress.css')
// let NProgress = require('nprogress');
// NProgress.configure({showSpinner: false});
// //请求前拦截
// axios.interceptors.request.use(function (config) {
//     console.log('请求前...');
//     NProgress.start();
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// })
// //响应前拦截
// axios.interceptors.response.use(function (response) {
//     console.log('响应前...');
//     NProgress.done();
//     return response;
// }, function (error) {
//     return Promise.reject(error)
// })

let Fetch = {
    baseURl: "/",
    parseConfig(config){
        return config = config == null ? {} : config;
    },
    get(url, config){
        return axios.get(url, this.parseConfig(config));
    },
    post(url, params, config){
        return axios.post(url, params, this.parseConfig(config));
    }
}

// let initFetch=()=>{
// 	// Vue.prototype.$http=Fetch;
// 	return Fetch;
// }

export default Fetch;
