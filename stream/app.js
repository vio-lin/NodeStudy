var fs = require('fs')
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf-8
readerStream.setEncoding('UTF8');

// 处理时间流

readerStream.on('data',function(chunk){
    data+=chunk;
})

readerStream.on('end',function(){
    console.log(data);
})

readerStream.on('error',function(err){
    console.log(err.stack);
})

console.log('程序执行完毕');

var data = '我是一行写入的内容';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');

// 标记文件结尾
writerStream.end();

// 处理事件流 --> finnish,error
writerStream.on('finnish',function(){
    console.log('写入完成');
})

writerStream.on('error',function(err){
    console.log(err.stack)
})

console.log('程序执行完毕');