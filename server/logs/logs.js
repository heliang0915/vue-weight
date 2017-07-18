var log4js = require('log4js');
var path=require('path');

log4js.configure(path.join(__dirname,"log4js.json"));

var fileLog = log4js.getLogger('log_info');
var consoleLog = log4js.getLogger('console');

let consoleLogger = consoleLog;
let useLog = function(app) {
    // app.use(log4js.connectLogger(consoleLog, {level:'INFO', format:':method :url'}));
    app.use(log4js.connectLogger(fileLog, {level:'auto', format:':method :url :status :response-timems :remote-addr'}));
}

export {consoleLogger,useLog,fileLog}



