/**
 *
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import  seoMap from './seo/seoMap';
Vue.use(VueRouter);
export function createRouter() {
    return new VueRouter(getConfig());
}
let routes=[];
Object.keys(seoMap).map((path)=>{
    let {component}=seoMap[path];
    routes.push({path,component});
})

let getConfig = () => {
    let config = {};
    config.mode = "history";
    config.routes = routes
    return config;
};



