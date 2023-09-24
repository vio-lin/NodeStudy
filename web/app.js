var http = require('http');
var fs = require('fs');
var url = require('url');
const { response } = require('express');

// 创建服务端
http.createServer(function(req, res){
    // 解析请求
    var pathname = url.parse(req.url).pathname;
    // 输出请求的文件名
    console.log("Request for " + pathname + " received.");
    // 从文件系统中 读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.error(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'});
            // 响应文件内容
            console.log(data.toString())
            response.write(data.toString());
        }
        response.end();
    })
}).listen(3000);

// 服务端响应成功
console.log('Server running');