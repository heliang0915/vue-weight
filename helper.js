/**
 *
*/
let os=require('os');
//获取本机IP
let getLocalIp=()=>{
    let interfaces=os.networkInterfaces();
    let ip="127.0.0.1";
    for(let dev in interfaces){
        interfaces[dev].forEach((detail,as)=>{
            if(detail.family=="IPv4"&&(dev.indexOf('WLAN')>-1||detail.internal==false)){ //获取无线网地址
                ip=detail.address;
            }
        })
    }
    return ip;
}
exports.getLocalIp=getLocalIp;