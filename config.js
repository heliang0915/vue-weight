let env=process.env.NODE_ENV||"development";
let vueEnv=process.env.VUE_ENV||"client";
let cacheTime=24*60*60*60*1000;
//全局模板文件
let templateName="template";

let config={
    development:{
        port:4000,
        api:'http://localhost:4000/api'
    },
    production:{
        port:5000,
        api:'http://localhost:5000/api'
    }
};

let conf= config[env];
let isServer=vueEnv=="server";
let isProd=(env!="development");
module.exports={
    conf,env,isProd,isServer,cacheTime,templateName
}
// export {conf,env,isProd,isServer,cacheTime,templateName};