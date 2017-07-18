/*
 * 客户端下入口文件
 * */
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import {createRouter} from './router';
// import initFetch from './util/fetch';
import store from './store';

export function createApp() {
    Vue.config.errorHandler = function (err, vm) {
        console.log('Vue出现错误%s', err);
    }
    //初始化fetch
    // initFetch();
    let router = createRouter();
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {app,router,store}
}



