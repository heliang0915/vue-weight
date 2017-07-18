import express from 'express';
import  path from 'path';
import debug from 'morgan';
import  cookieParser from 'cookie-parser';
import  bodyParser from 'body-parser';
import {env,cacheTime} from '../config';
import api from './router/api';
import {useLog,fileLog} from './logs/logs';
import index from './router/';
import fs from 'fs';
import compression from 'compression';

let App=express();

//日志配置
useLog(App);

// 启用gzip压缩
App.use(compression({
    threshold:0
}));
App.use(debug('dev'));
App.use(cookieParser());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));
App.use('/dist',express.static(path.join(__dirname,'/../dist/')));
App.use('/assets',express.static(path.join(__dirname,'/../assets/')));

App.use((req,res,next)=>{
    let date=new Date();
    date.setTime(date.getTime()+cacheTime);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Cache-control","max-age:"+cacheTime);
    res.header("Expires",date.toUTCString());
    next();
})


App.use("/api/",api)
App.use("/",index);




// catch 404 and forward to error handler
App.use(function(req, res, next) {
    var err = new Error('Not Found');
    console.log("404");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (App.get('env') === 'development') {
    App.use(function(err, req, res, next) {
        console.log(err);
        if (err.code === 404){
            res.status(404).end('Not Found')
        }else{
            fs.readFile(path.join(__dirname,"/page/500.html"),(er,content)=>{
                res.status(err.status || 500).end(content.toString());
            })
        }

        fileLog.error(err.stack);
    });
}

// production error handler
// no stacktraces leaked to user
App.use(function(err, req, res, next) {
    if (err.code === 404){
        res.status(404).end('Not Found')
    }else{
        // res.status(err.status || 500).end("Internal Server Error "+err.stack)
        fs.readFile(path.join(__dirname,"/page/500.html"),(er,content)=>{
            res.status(err.status || 500).end(content.toString());
        })
    }
    fileLog.error(err.stack);
});



if(env!="development"){
    App.use(express.static(path.join(__dirname,"/../build/"+env)));
    App.use(express.static(path.join(__dirname,"/../build/server")));
    console.log("生产状态：静态目录地址==="+path.join(__dirname,"/../build/"+env));
}else{
    App.use(express.static(path.join(__dirname,"/../build/"+env)));
    App.use(express.static(path.join(__dirname,"/../build/dev_server")));
    console.log("开发状态：静态目录地址==="+path.join(__dirname,"/../build/"+env));

}
export default App;
